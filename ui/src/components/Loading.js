import React from "react";
import "../sass/components/_loading.scss";
export default function Loading() {
  return (
    <div className="overlay">
      <div className="loader"></div>
    </div>
  );
}
