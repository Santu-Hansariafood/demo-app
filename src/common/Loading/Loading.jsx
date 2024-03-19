import React, { useState } from 'react';
import { RiseLoader } from "react-spinners";

const Loading = () => {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div className="container mx-auto mt-8 flex justify-center items-center h-screen">
                <div className="flex flex-col items-center">
                    <RiseLoader
                        color={"#36D7B7"}
                        height={100}
                        width={100}
                        radius={10}
                        margin={10}
                    />
                    <p className="text-green-500 font-semibold mt-4">Loading...</p>
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
}

export default Loading;
