"use client";
import React, { useState } from 'react';

export const HomePage = () => {
    const [activeAccordion, setActiveAccordion] = useState(2);

    const handleAccordionHover = (index) => {
        setActiveAccordion(index);
    };

    const handleAccordionLeave = () => {
        // setActiveAccordion(null);
    };

    return (
        <div className="flex ml-[50px] mr-[50px]">
            {accordionData.map((item, index) => (
                <div key={index}>
                    <div
                        className={`w-full p-5 font-medium rtl:text-right text-gray-500 border-b focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 transition-all duration-500`}
                        onMouseEnter={() => handleAccordionHover(index)}
                        onMouseLeave={handleAccordionLeave}
                    >
                        <h2>
                            <span>{item.question}</span>
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </h2>
                    </div>
                    <div
                        id={`accordion-collapse-body-${index}`}
                        className={`p-[60px 20px] overflow-hidden ${activeAccordion === index
                            ? 'opacity-100 w-full transition-all duration-500 bg-[rgba(4,38,56,0.50)] p-[60px 100px 60px 40px]'
                            : 'opacity-0 w-0 transition-all duration-500'
                            } dark:border-gray-700`}
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                        style={{ maxHeight: activeAccordion === index ? '500px' : '0' }} 
                    >
                        <div className="p-5" style={{ overflow: 'hidden' }}>
                            {item.answer.map((paragraph, idx) => (
                                <p key={idx} className="mb-2 text-gray-500 dark:text-gray-400">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>


            ))
            }
        </div >
    );
};

const accordionData = [
    {
        question: 'What is Flowbite?',
        answer: [
            'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
        ],
    },
    {
        question: 'Is there a Figma file available?',
        answer: [
            'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.'
        ],
    },
    {
        question: 'What are the differences between Flowbite and Tailwind UI?',
        answer: [
            'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.'
        ],
    },
];
