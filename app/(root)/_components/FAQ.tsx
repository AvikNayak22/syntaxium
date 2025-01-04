import { FAQItem } from "./FAQItem";

export function FAQ() {
  const faqs = [
    {
      question: "What is Syntaxium?",
      answer:
        "Syntaxium is a modern, browser-based code editor that allows you to write, test, and share code without any setup. It supports multiple programming languages and comes with features like syntax highlighting, code completion, and real-time error detection.",
    },
    {
      question: "Which programming languages are supported?",
      answer:
        "Syntaxium supports a wide range of programming languages thanks to the Piston API, including JavaScript, Python, C++, Java, Ruby, Go, and many more.",
    },
    {
      question: "Do I need to install anything to use Syntaxium?",
      answer:
        "No, Syntaxium runs entirely in your browser. You don’t need to install any software or plugins—just open the website and start coding instantly.",
    },
    {
      question: "Is Syntaxium free to use?",
      answer:
        "Yes. Syntaxium is completely free to use. You can create an account and start coding right away.",
    },
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about Syntaxium
          </p>
        </div>

        <div className="divide-y divide-gray-800">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
