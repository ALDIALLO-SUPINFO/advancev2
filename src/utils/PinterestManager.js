// src/modules/PinterestManager.js
class PinterestManager {
    constructor() {
        this.token = null;
        this.isConnected = false;
        this.api = {
            baseUrl: 'https://api.pinterest.com/v5',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    async initialize() {
        try {
            // Vérifier si un token existe déjà
            const storedToken = localStorage.getItem('pinterest_token');
            if (storedToken) {
                this.token = storedToken;
                this.api.headers['Authorization'] = `Bearer ${this.token}`;
                await this.validateToken();
            }
        } catch (error) {
            console.error('Erreur d\'initialisation Pinterest:', error);
            throw error;
        }
    }

    async connect() {
        try {
            const response = await fetch('/api/pinterest/auth/initialize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await response.json();
            if (data.success) {
                this.token = data.token;
                localStorage.setItem('pinterest_token', this.token);
                this.api.headers['Authorization'] = `Bearer ${this.token}`;
                this.isConnected = true;
                return data.accountInfo;
            } else {
                throw new Error(data.message || 'Échec de la connexion Pinterest');
            }
        } catch (error) {
            console.error('Erreur de connexion Pinterest:', error);
            throw error;
        }
    }

    async validateToken() {
        try {
            const response = await fetch(`${this.api.baseUrl}/user_account`, {
                headers: this.api.headers
            });

            if (!response.ok) {
                this.disconnect();
                throw new Error('Token invalide');
            }

            this.isConnected = true;
            return await response.json();
        } catch (error) {
            console.error('Erreur de validation du token:', error);
            throw error;
        }
    }

    disconnect() {
        localStorage.removeItem('pinterest_token');
        this.token = null;
        this.isConnected = false;
        delete this.api.headers['Authorization'];
    }

    // Méthodes de gestion des campagnes
    async createCampaign(campaignData) {
        try {
            const response = await fetch(`${this.api.baseUrl}/ad_accounts/${campaignData.adAccountId}/campaigns`, {
                method: 'POST',
                headers: this.api.headers,
                body: JSON.stringify(campaignData)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de la campagne');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur de création de campagne:', error);
            throw error;
        }
    }

    async getCampaigns(adAccountId) {
        try {
            const response = await fetch(`${this.api.baseUrl}/ad_accounts/${adAccountId}/campaigns`, {
                headers: this.api.headers
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des campagnes');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur de récupération des campagnes:', error);
            throw error;
        }
    }

    // Utilitaires pour la gestion des campagnes
    formatCampaignData(rawData) {
        return {
            name: rawData.name,
            status: rawData.status,
            objective_type: rawData.objective,
            daily_spend_cap: Math.round(rawData.dailyBudget * 100), // Convertir en centimes
            start_time: rawData.startDate,
            end_time: rawData.endDate || null,
            tracking_urls: {
                impression: rawData.trackingUrls?.impression || [],
                click: rawData.trackingUrls?.click || []
            }
        };
    }
}

// Export d'une instance unique
export const pinterestManager = new PinterestManager();