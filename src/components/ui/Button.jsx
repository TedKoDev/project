import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-brand text-white  py-2 rounted-sm hover:brightness-110  font-bold  px-4 "
    >
      {text}
    </button>
  );
}
