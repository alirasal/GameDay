import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        className="main-body flex justify-center items-center gap-12 font-extrabold w-max-full"
        style={{ marginTop: "10rem" }}
      >
        <div>
          <h1 className="main-text text-green-800 text-6xl leading-30">
            Book your <br /> Turf now!!
          </h1>
          <div className="mt-10 p-10 relative shadow-lg rounded w-98 h-30">
            <div className="flex flex-col justify-between items-center">
              <input
                className="w-96 h-10 p-2 rounded outline-none bg-gray-200"
                type="text"
                placeholder="here we go"
              />
              <button className="search-btn mt-5 bg-green-800 rounded-lg text-white w-32 h-12 text-center">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 left-3 ">
          <img className=" rounded-lg" src="https://plus.unsplash.com/premium_photo-1682435573900-b55886ec0e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGwlMjB0dXJmfGVufDB8fDB8fHww" alt="Turf" />
        </div>
      </div>
    </div>
  );
}

export default Home;
