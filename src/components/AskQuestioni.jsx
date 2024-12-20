import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const AskQuestionForm = () => {
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address || !question) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save the form data to Firestore
      await addDoc(collection(db, "questions"), {
        address,
        question,
        createdAt: Timestamp.now(),
      });

      setAddress("");
      setQuestion("");
      setIsSuccess(true);
      setMessage("Your question has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting question:", error);
      setMessage("Error submitting your question. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mt-8 border shadow-md text-black rounded-xl p-8"
    >
      <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-600 font-bold mb-2">
          Email Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none text-black"
          placeholder="Enter your address"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="question"
          className="block text-gray-600 font-bold mb-2"
        >
          Question
        </label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none text-black"
          placeholder="Enter your question"
        />
      </div>
      {message && (
        <p className={`mb-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 text-gray-700 font-bold rounded ${
          isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-orange-400 hover:bg-orange-300"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default AskQuestionForm;
