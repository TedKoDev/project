import React from "react";

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        src={photoURL}
        alt={displayName}
        className="w-8 h-8 rounded-full mr-2"
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
