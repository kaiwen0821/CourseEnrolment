import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I add a module to favourites?",
      answer:
        "Click the heart or favourite button on a module to save it to your favourites list."
    },
    {
      question: "How do I remove a module from favourites?",
      answer:
        "Go to the Favourites page and click the remove button. You will be asked to confirm."
    },
    {
      question: "Is my data saved when I refresh the page?",
      answer:
        "Yes. Your favourites are stored in your browser using local storage."
    },
    {
      question: "Do I need an account to use this portal?",
      answer:
        "No account is required. You can browse diplomas and modules freely."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <strong>{faq.question}</strong>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
