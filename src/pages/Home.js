import React, { useRef, useState } from 'react';
import BackgroundPattern from '../components/BackgroundPattern';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ModernFooter from './ModernFooter';
import LoginModal from '../components/LoginModal';
import CookieConsent from '../components/CookieConsent';

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const pricingRef = useRef(null);
    const faqRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const handleAuth = (type) => {
        if (type === 'logins') {
            setShowLoginModal(true);
        } else {
            window.location.href = `/${type}`;
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <BackgroundPattern />

            <Navigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                scrollToSection={scrollToSection}
                handleAuth={handleAuth}
                pricingRef={pricingRef}
                faqRef={faqRef}
            />

            <HeroSection 
                scrollToSection={scrollToSection}
                pricingRef={pricingRef}
            />

            <FeaturesSection />

            <PricingSection 
                pricingRef={pricingRef}
                handleAuth={handleAuth}
            />

            <FAQSection faqRef={faqRef} />

            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
         
            <ModernFooter />
            <CookieConsent />
        </div>
    );
};

export default LandingPage;