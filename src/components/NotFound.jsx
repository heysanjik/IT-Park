import React from "react";
import Header from "./Header";

export default function NotFound() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img
          src="./public/found.svg"
          alt="404 Not Found"
          style={{ maxWidth: "400px" }}
        />
        <h1>404 Not Found</h1>
        <p>Bu sahifa mavjud emas.</p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    </>
  );
}
