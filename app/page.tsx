import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/FaqSection";
import BottomBanner from "@/components/BottomBanner";

export default function Page() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrustedCompanies />
            <FeaturesSection />
            <Testimonials />
            <Pricing />
            <FaqSection />
            <BottomBanner />
            <Footer />
        </>
    );
}