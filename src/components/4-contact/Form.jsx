import { useState } from "react";
import { db } from "../../firebase"; // Firestore instance
import { collection, addDoc, Timestamp } from "firebase/firestore";

const JoinForm = ({ groupType }) => {
  const [telegramId, setTelegramId] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  
  
  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dbhrjqj53/upload";
  const uploadPreset = "portfolio-projects";
  

  const handleReceiptChange = (e) => {
    const file = e.target.files?.[0];
    setReceipt(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setReceiptPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setReceiptPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!telegramId || !receipt) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Upload receipt to Cloudinary
      const formData = new FormData();
      formData.append("file", receipt);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image.");
      }

      const cloudinaryData = await response.json();
      const receiptUrl = cloudinaryData.secure_url;

      // Step 2: Save the form data to Firestore
      await addDoc(collection(db, "joinRequests"), {
        telegramId,
        receiptUrl, // Save Cloudinary URL
        groupType,
        createdAt: Timestamp.now(),
      });

      setTelegramId("");
      setReceipt(null);
      setReceiptPreview(null);
      setIsSuccess(true);
      setMessage("Submission successful!");
    } catch (error) {
      console.error("Error saving data:", error);
      setMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto border shadow-md text-black rounded-xl p-8">
      <h2 className="text-xl font-bold mb-4"> {groupType} Group</h2>
      <div className="mb-4">
        <label htmlFor={`telegramId-${groupType}`} className="block text-gray-600 font-bold mb-2">
          Telegram ID
        </label>
        <input
          id={`telegramId-${groupType}`}
          type="text"
          value={telegramId}
          onChange={(e) => setTelegramId(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none text-black"
          placeholder="Enter your Telegram ID"
        />
      </div>
      <div className="mb-4">
        <label htmlFor={`receipt-${groupType}`} className="block text-gray-600 font-bold mb-2">
          Payment Receipt
        </label>
        <input
          id={`receipt-${groupType}`}
          type="file"
          onChange={handleReceiptChange}
          className="w-full"
          accept="image/*"
        />
        {receiptPreview && (
          <div className="mt-4">
            <p className="text-gray-600 text-sm">Uploaded Image Preview:</p>
            <img src={receiptPreview} alt="Receipt Preview" className="mt-2 max-w-64 h-auto rounded border" />
          </div>
        )}
      </div>
      {message && <p className={`mb-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 text-white font-bold rounded ${
          isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default JoinForm;
