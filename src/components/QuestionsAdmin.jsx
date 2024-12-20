import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const QuestionAdmin = () => {
  const [questions, setQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Fetch questions from Firestore
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsSnapshot = await getDocs(collection(db, "questions"));
        const questionsData = questionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Delete question logic
  const deleteQuestion = async (id) => {
    try {
      await deleteDoc(doc(db, "questions", id));
      setQuestions((prev) => prev.filter((question) => question.id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    } finally {
      closeModal();
    }
  };

  // Mark question as answered
  const markAsAnswered = async (id) => {
    try {
      await updateDoc(doc(db, "questions", id), { status: "answered" });
      setQuestions((prev) =>
        prev.map((question) =>
          question.id === id ? { ...question, status: "answered" } : question
        )
      );
    } catch (error) {
      console.error("Error updating question status:", error);
    }
  };

  // Modal control
  const openModal = (question) => {
    setSelectedQuestion(question);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
    setModalVisible(false);
  };

  return (
    <div className="w-full min-h-screen mt-6 pt-4">

      {/* Questions Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          User Questions
        </h2>
        <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 bg-white">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Question</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{question.address}</td>
                  <td className="px-6 py-4">{question.question}</td>
                  <td className="px-6 py-4">
                    {question.createdAt.toDate().toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {question.status === "answered" ? (
                      <span className="text-green-600 font-bold">Answered</span>
                    ) : (
                      <button
                        onClick={() => markAsAnswered(question.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Mark as Answered
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openModal(question)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && selectedQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Are you sure you want to delete the question from{" "}
              <span className="font-bold">{selectedQuestion.address}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteQuestion(selectedQuestion.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionAdmin;
