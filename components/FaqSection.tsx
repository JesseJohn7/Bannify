"use client";
import SectionTitle from "@/components/SectionTitle";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqsData = [
    {
        question: "What is this SaaS app used for?",
        answer: "This app helps businesses manage their workflows more efficiently by automating tasks, tracking performance, and integrating with third-party tools."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start the trial."
    },
    {
        question: "Can I change my subscription plan later?",
        answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings."
    },
    {
        question: "How is my data secured?",
        answer: "We use industry-standard encryption, regular security audits, and secure data centers to ensure your data is safe and protected."
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, our support team is available 24/7 via live chat and email. We also have a help center with detailed documentation and tutorials."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <SectionTitle text1="FAQ's" text2="Frequently asked questions" text3="Ship Beautiful Frontends Without the Overhead — Customizable, Scalable, and Developer-Friendly UI Components." />
            <div className="mt-8 w-full">
                {faqsData.map((faq, index) => (
                    <div
                        className="border-b border-slate-200 py-4 cursor-pointer w-full"
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">{faq.question}</h3>
                            <ChevronDown
                                size={18}
                                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                            />
                        </div>
                        <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-xl ${
                            openIndex === index
                                ? "opacity-100 max-h-[500px] translate-y-0 pt-4"
                                : "opacity-0 max-h-0 overflow-hidden -translate-y-2"
                        }`}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}