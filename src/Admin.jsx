import { useEffect, useState } from "react";
import { db } from "./firebase"; // Firestore instance
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const AdminDashboard = () => {
  const [cryptoRequests, setCryptoRequests] = useState([]);
  const [forexRequests, setForexRequests] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Fetch Crypto Requests
        const cryptoQuery = query(collection(db, "joinRequests"), where("groupType", "==", "crypto"));
        const cryptoSnapshot = await getDocs(cryptoQuery);
        const cryptoData = cryptoSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCryptoRequests(cryptoData);

        // Fetch Forex Requests
        const forexQuery = query(collection(db, "joinRequests"), where("groupType", "==", "forex"));
        const forexSnapshot = await getDocs(forexQuery);
        const forexData = forexSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setForexRequests(forexData);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const deleteRequest = async (id, groupType) => {
    try {
      await deleteDoc(doc(db, "joinRequests", id));
      if (groupType === "crypto") {
        setCryptoRequests((prev) => prev.filter((req) => req.id !== id));
      } else {
        setForexRequests((prev) => prev.filter((req) => req.id !== id));
      }
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  const markAsAdded = async (id, groupType) => {
    try {
      await updateDoc(doc(db, "joinRequests", id), { status: "added" });
      if (groupType === "crypto") {
        setCryptoRequests((prev) =>
          prev.map((req) => (req.id === id ? { ...req, status: "added" } : req))
        );
      } else {
        setForexRequests((prev) =>
          prev.map((req) => (req.id === id ? { ...req, status: "added" } : req))
        );
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const openModal = (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedRequest(null);
    setModalVisible(false);
  };

  const handleMarkAsAdded = () => {
    if (selectedRequest) {
      markAsAdded(selectedRequest.id, selectedRequest.groupType);
      closeModal();
    }
  };

  const renderRequests = (requests, groupType) =>
    requests.map((request) => (
      <tr key={request.id} className="border-b hover:bg-gray-50">
        <td className="px-6 py-4">{request.telegramId}</td>
        <td className="px-6 py-4">
          <a
            href={request.receiptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Receipt
          </a>
        </td>
        <td className="px-6 py-4">
          {request.createdAt.toDate().toLocaleString()}
        </td>
        <td className="px-6 py-4">
          {request.status === "added" ? (
            <span className="text-green-600 font-bold">Added</span>
          ) : (
            <button
              onClick={() => openModal({ ...request, groupType })}
              className="text-blue-600 hover:underline"
            >
              Mark as Added
            </button>
          )}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => deleteRequest(request.id, groupType)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="w-full min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Crypto Group Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Crypto Group Requests
        </h2>
        <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 bg-white">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-4">Telegram ID</th>
                <th className="px-6 py-4">Receipt</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>{renderRequests(cryptoRequests, "crypto")}</tbody>
          </table>
        </div>
      </div>

      {/* Forex Group Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Forex Group Requests
        </h2>
        <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 bg-white">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-4">Telegram ID</th>
                <th className="px-6 py-4">Receipt</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>{renderRequests(forexRequests, "forex")}</tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Did you invite the user with Telegram ID{" "}
              <span className="font-bold">{selectedRequest.telegramId}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleMarkAsAdded}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Yes, Mark as Added
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
