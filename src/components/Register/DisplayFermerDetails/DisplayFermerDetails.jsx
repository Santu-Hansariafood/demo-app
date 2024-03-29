import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayFarmerDetails = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchPhotos = async () => {
    //   try {
    //     const response = await axios.get("https://hansaria-server.onrender.com/registerPhoto");
    //     setPhotos(response.data);
    //   } catch (error) {
    //     console.error("Error fetching photos:", error);
    //     setError("Error fetching photos. Please try again later.");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://hansaria-server.onrender.com/registerPhoto");
        console.log(response.data); 
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Error fetching photos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div className="container mx-auto flex justify-center">
    //   <div className="w-full md:w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
    //     <div className="py-4 px-6">
    //       <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
    //         Register Photo Details
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         {Object.entries(photos).map(([key, value]) => (
    //           <div key={key} className="relative w-full">
    //             <img
    //               src={`https://hansaria-server.onrender.com/uploads/${value.image}`}
    //               alt={key}
    //               className="mt-2 w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
    //               style={{ width: "330px", height: "330px" }}
    //             />
    //             <div className="absolute inset-0 hidden justify-center items-center hover:flex bg-black bg-opacity-50 text-white text-2xl font-bold">
    //               Hover to Zoom
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  // );
  <div>
      <h2>Uploaded Photos:</h2>
      <div>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={`https://hansaria-server.onrender.com/registerPhoto/${photo}`}
            alt={`Photo ${index}`}
            style={{ maxWidth: "200px", maxHeight:"200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  )
};

export default DisplayFarmerDetails;
