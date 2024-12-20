import FaqCard from "./FaqCard";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from './Section';

const Faqs = () => {
  const faqData = [
    {
      question: "What is the secret to sustainable trading income?",
      answer:
        "Sustainable trading income comes from consistent strategies, risk management, and emotional control. Amin's approach ensures that the trading methods are reliable and repeatable over time.",
    },
    {
      question: "How can I get access to Amin's live broadcasts?",
      answer:
        "Amin broadcasts live sessions regularly, and you can access them through his official channels or website. The sessions are designed to provide real-time analysis and discussions.",
    },
    {
      question: "What makes Amin's analysis different from others?",
      answer:
        "Amin combines his years of trading experience with a focus on the Arab and Tunisian community, offering clear, practical insights and strategies tailored for traders in these regions.",
    },
    {
      question: "Can anyone follow Amin's trading advice?",
      answer:
        "Yes, Amin's advice is accessible and easy to follow for both beginners and experienced traders. His focus is on helping people achieve their financial goals regardless of their starting point.",
    },
    {
      question: "How do I start trading with Amin's guidance?",
      answer:
        "You can start by joining his live broadcasts, watching the recorded videos, and reviewing his past analyses to understand his approach. Joining his community will give you all the necessary tools to begin trading.",
    },
    {
      question: "Is trading really a sustainable source of income?",
      answer:
        "Yes, when done correctly, trading can be a sustainable source of income. Amin’s transparent track record over the last 17 months proves that with the right strategies and discipline, consistent profits are achievable.",
    },
  ];

  return (
    <Section className="overflow-hidden" id="faqs">
      <div className="container relative flex justify-center flex-col items-center z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Chebbi Trading"
          title="Frequently Asked Questions"
        />

        <div className="grid grid-cols-1 w-2/3 justify-center gap-6 mt-6">
          {faqData.map((faq, index) => (
            <FaqCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faqs;
