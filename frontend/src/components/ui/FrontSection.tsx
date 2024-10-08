import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { VITE_BACKEND_URL } from "../../config";

export const FrontSection = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState<boolean>(false);

  const checkAuth = async () => {
    try {
      setloading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/v1/user/me`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status != 200) {
        toast.error(response.data.message, {
          id: "check",
          duration: 3000,
        });
        setloading(false);
        navigate("/signin");
      }
      toast.success(response.data.message, {
        id: "check",
        duration: 3000,
      });
      setloading(false);
      navigate("/home");
    } catch (e) {
      toast.error("You are not logged in", {
        id: "check",
        duration: 3000,
      });
      navigate("/signin");
    }
  };

  return (
    <section className="w-full h-screen flex flex-row items-center justify-center">
      <div>
        <Toaster position="bottom-left" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="max-sm:text-5xl max-md:w-full max-md:text-6xl md:text-8xl max-w-5xl px-12 py-4 font-primaryRegular">
            Effortless Content Creation and Sharing
          </div>
          <div className="text-2xl font-primaryRegular font-lighter max-w-5xl tracking-normal px-12 pb-4">
            A place to read, write and deepen your thoughts. <br />
            Unleash your creativity and reach a wider audience with our powerful
            blogging platform.
          </div>
          <div className="max-w-lg px-12 py-4">
            <button
              className="bg-black text-white px-10 py-2 w-52 rounded-md flex items-center justify-center"
              onClick={checkAuth}
            >
              {loading ? <Spinner /> : "Get Started"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[35%] max-lg:hidden">
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="Theme art"
        />
      </div>
    </section>
  );
};
