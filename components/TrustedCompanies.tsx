import Marquee from "react-fast-marquee";

const companies = ["Framer", "Huawei", "Instagram", "Microsoft", "Walmart"];

export default function TrustedCompanies() {
    return (
        <>
            <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
                Trusted by leading brands, including —
            </h3>
            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25}>
                <div className="flex items-center justify-center gap-16 px-8">
                    {[...companies, ...companies].map((name, index) => (
                        <span key={index} className="text-slate-400 font-semibold text-lg tracking-wide whitespace-nowrap">
                            {name}
                        </span>
                    ))}
                </div>
            </Marquee>
        </>
    );
}