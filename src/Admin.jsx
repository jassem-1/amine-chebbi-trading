import { useEffect, useState } from "react";
import { db } from "./firebase"; // Firestore instance
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import QuestionAdmin from './components/QuestionsAdmin';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth to access logout
const AdminDashboard = () => {
  const [cryptoRequests, setCryptoRequests] = useState([]);
  const [forexRequests, setForexRequests] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filteredCrypto, setFilteredCrypto] = useState([]);
  const [filteredForex, setFilteredForex] = useState([]);
  const [dateFilter, setDateFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const { logout } = useAuth(); // Access the logout function from AuthContext
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from AuthContext
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Fetch Crypto Requests
        const cryptoQuery = query(collection(db, "joinRequests"), where("groupType", "==", "crypto"));
        const cryptoSnapshot = await getDocs(cryptoQuery);
        const cryptoData = cryptoSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCryptoRequests(cryptoData);
        setFilteredCrypto(cryptoData);

        // Fetch Forex Requests
        const forexQuery = query(collection(db, "joinRequests"), where("groupType", "==", "forex"));
        const forexSnapshot = await getDocs(forexQuery);
        const forexData = forexSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setForexRequests(forexData);
        setFilteredForex(forexData);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);
  const filterByDate = (data, filter) => {
    const now = new Date();
    const lastDay = new Date(now.setDate(now.getDate() - 1));
    const lastWeek = new Date(now.setDate(now.getDate() - 7));
    const lastMonth = new Date(now.setMonth(now.getMonth() - 1));

    switch (filter) {
      case "lastDay":
        return data.filter((item) => item.createdAt.toDate() > lastDay);
      case "lastWeek":
        return data.filter((item) => item.createdAt.toDate() > lastWeek);
      case "lastMonth":
        return data.filter((item) => item.createdAt.toDate() > lastMonth);
      default:
        return data;
    }
  };
  const handleFilterChange = (filter, type) => {
    setDateFilter(filter);

    if (type === "crypto") {
      setFilteredCrypto(filterByDate(cryptoRequests, filter));
    } else if (type === "forex") {
      setFilteredForex(filterByDate(forexRequests, filter));
    }
  };

  const handleSort = (type) => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));

    if (type === "crypto") {
      setFilteredCrypto((prev) =>
        [...prev].sort((a, b) =>
          sortOrder === "asc"
            ? a.createdAt.toDate() - b.createdAt.toDate()
            : b.createdAt.toDate() - a.createdAt.toDate()
        )
      );
    } else if (type === "forex") {
      setFilteredForex((prev) =>
        [...prev].sort((a, b) =>
          sortOrder === "asc"
            ? a.createdAt.toDate() - b.createdAt.toDate()
            : b.createdAt.toDate() - a.createdAt.toDate()
        )
      );
    }
  };

  const deleteRequest = async () => {
    try {
      await deleteDoc(doc(db, "joinRequests", selectedRequest.id));
      if (selectedRequest.groupType === "crypto") {
        setCryptoRequests((prev) => prev.filter((req) => req.id !== selectedRequest.id));
        setFilteredCrypto((prev) => prev.filter((req) => req.id !== selectedRequest.id));
      } else {
        setForexRequests((prev) => prev.filter((req) => req.id !== selectedRequest.id));
        setFilteredForex((prev) => prev.filter((req) => req.id !== selectedRequest.id));
      }
      setDeleteModalVisible(false);
      setSelectedRequest(null);
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  const openDeleteModal = (request) => {
    setSelectedRequest(request);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
    setSelectedRequest(null);
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
            onClick={() => openDeleteModal(request)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="w-full min-h-screen p-8 bg-gray-50">
 <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      {/* Crypto Group Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Crypto Group Requests
        </h2>
        <div className="flex justify-between w-full space-x-4 mb-1">
            <select
              className="p-2 border text-black rounded"
              value={dateFilter}
              onChange={(e) => handleFilterChange(e.target.value, "crypto")}
            >
              <option value="all">All</option>
              <option value="lastDay">Last Day</option>
              <option value="lastWeek">Last Week</option>
              <option value="lastMonth">Last Month</option>
            </select>
            <button
              onClick={() => handleSort("crypto")}
              className="p-2 bg-blue-600 text-white rounded"
            >
              Sort by Date ({sortOrder})
            </button>
          </div>
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
            <tbody>{renderRequests(filteredCrypto, "crypto")}</tbody>
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
      <QuestionAdmin />
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
      {deleteModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Are you sure you want to delete this request?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={deleteRequest}
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

export default AdminDashboard;
