import React, { useState } from "react";

const DeleteStore = ({ storeId, onDelete }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/store/${storeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onDelete();
      } else {
        throw new Error("Failed to delete store");
      }
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowConfirmModal(true)} className="text-red-500">
        Delete
      </button>
      {showConfirmModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="mb-4">Are you sure you want to delete this store?</p>
            <div className="flex justify-between">
              <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                Delete
              </button>
              <button onClick={() => setShowConfirmModal(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteStore;
