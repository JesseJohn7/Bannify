import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const features = [
    {
        src: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png",
        title: "Feedback analyser",
        desc: "Get instant insights into your finances with live dashboards."
    },
    {
        src: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png",
        title: "User management",
        desc: "Get instant insights into your finances with live dashboards."
    },
    {
        src: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png",
        title: "Better invoicing",
        desc: "Get instant insights into your finances with live dashboards."
    },
];

export default function FeaturesSection() {
    return (
        <>
            <SectionTitle text1="Features" text2="Features Overview" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                {features.map((feature, index) => (
                    <div key={index} className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                        <Image className="rounded-xl" src={feature.src} alt={feature.title} height={400} width={400} />
                        <h3 className="text-base font-semibold text-slate-700 mt-4">{feature.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}