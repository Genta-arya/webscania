import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { FaLock } from "react-icons/fa"; 

const Auth = ({ onAuthenticate }) => {
  const [pin, setPin] = useState("");
  const [isPinValid, setIsPinValid] = useState(true); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      onAuthenticate(false);
      setIsPinValid(false);
    }
  }, [onAuthenticate, location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pin === "r620") {
      onAuthenticate(true);
      setIsPinValid(true); 
    } else {
      setIsPinValid(false);
      toast.error("PIN is incorrect", { duration: 2000 });
    }
  };

  const handleBack = () => {
    onAuthenticate(false);
    navigate("/"); // Arahkan ke halaman utama
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  text-xs md:text-base">
      <div className="bg-white  shadow-lg rounded-lg p-8 md:w-[60%] w-[90%] lg:w=[50%]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="pin" className="mb-2 text-gray-700  text-center font-bold text-base">Security</label>
          <div className="flex items-center border-b rounded mb-4 ">
            <FaLock className="text-gray-400 mr-2 ml-3" /> {/* Ikon kunci */}
            <input
              type="password"
              id="pin"
              placeholder="Application PIN"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                if (isPinValid) setIsPinValid(true); // Reset validasi jika pengguna mulai mengetik
              }}
              className={`p-2 border-none w-full text-black outline-none ${isPinValid ? "border-gray-300" : "border-red-500"}`}
              required
            />
          </div>
          <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white w-full p-2 rounded transition duration-200">
            Apply
          </button>

          <button onClick={handleBack} type="button" className="text-black border-gray-600 border mt-2 w-full p-2 rounded transition duration-200">
            Back
          </button>
        </form>
      </div>
      <Toaster richColors position="top-right" closeButton={false} />
    </div>
  );
};

export default Auth;
