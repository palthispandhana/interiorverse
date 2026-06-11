import { useState } from "react";

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "We provide interior design concepts, 3D visualizations, and modern space planning solutions.",
  },

  {
    question: "Do you create custom interior designs?",
    answer:
      "Yes, every project can be customized according to client requirements and preferences.",
  },

  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity, scope, and client requirements.",
  },

  {
    question: "Can I request multiple design revisions?",
    answer:
      "Yes, revisions can be discussed and included based on project requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
    <section
      id="faq"
      className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-24
      "
    >
      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Frequently Asked Questions
      </h2>

      <div
        className="
        max-w-4xl
        mx-auto
        flex
        flex-col
        gap-4
        "
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="
            bg-[#111111]
            rounded-xl
            border
            border-white/10
            overflow-hidden
            "
          >
            <button
              onClick={() =>
                toggleFAQ(index)
              }
              className="
              w-full
              text-left
              px-6
              py-5
              font-semibold
              hover:text-cyan-400
              transition
              "
            >
              {faq.question}
            </button>

            {activeIndex === index && (
              <div
                className="
                px-6
                pb-5
                text-gray-400
                "
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;