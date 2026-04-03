import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import Marquee from "react-fast-marquee";

const testimonialsData = [
    { image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Briar Martin", handle: "@neilstellar" },
    { image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Avery Johnson", handle: "@averywrites" },
    { image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Jordan Lee", handle: "@jordantalks" },
    { image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Marcus Reed", handle: "@marcusbuilds" },
];

export default function Testimonials() {
    return (
        <>
            <SectionTitle text1="Testimonials" text2="Our Social Proof" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />

            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25}>
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right">
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
        </>
    );
}