import React from "react";

export default function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-400 ${className}`}></div>;
}
