import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq-card border-2 border-gray-700 p-5 shadow-md rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAnswer}
      >
        <h3 className="text-xl text-black font-semibold">{question}</h3>
        <span
          className={`transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
        >
<IoIosArrowDown className="text-black text-bold border border-black rounded-full "/>
</span>
      </div>
      {isOpen && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FaqCard;
