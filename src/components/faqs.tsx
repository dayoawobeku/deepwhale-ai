'use client';

import {useState} from 'react';

export default function Faqs() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section className="max-w-[792px] mx-auto w-full">
      <h2 className="text-5xl font-bold text-gray-900">FAQs</h2>
      <ul className="text-gray-700 mt-12">
        <li className="border-t border-gray-200">
          <button
            role="button"
            aria-expanded={expanded.includes(1)}
            aria-controls="faq-item-1"
            onClick={() => toggleExpand(1)}
            className="text-xl font-semibold py-4 w-full text-start"
          >
            What is UpLift?
          </button>
          <p
            id="faq-item-1"
            hidden={!expanded.includes(1)}
            className="pt-4 px-4"
          >
            We&apos;re rethinking mental health to work for everyone. We believe
            it should be easy for everyone to access care and experience real
            growth.
            <br />
            <br />
            UpLift makes it simple for people to pay for therapy and psychiatry
            sessions using insurance or with cash at an affordable rate.
          </p>
        </li>
        <li className="border-y border-gray-200">
          <button
            role="button"
            aria-expanded={expanded.includes(2)}
            aria-controls="faq-item-2"
            onClick={() => toggleExpand(2)}
            className="text-xl font-semibold py-4 w-full text-start"
          >
            I&apos;m new to therapy, how do I get started?
          </button>
          <p
            id="faq-item-2"
            hidden={!expanded.includes(2)}
            className="pt-4 px-4"
          >
            It only takes 5 minutes! Answer a few questions and then we will
            show you a list of recommended providers based on your goals,
            schedule, and insurance. You can do it all online yourself or call
            888-380-2028, and we'll guide you through the process.
          </p>
        </li>
        {/* More FAQ items here */}
      </ul>
    </section>
  );
}
