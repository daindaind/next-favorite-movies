import Navbar from "@/components/common/Navbar";
import React from "react";

function HomeLayout({ children }) {
  return (
    <div className="w-svw h-svh overflow-x-hidden bg-light-white">
      <Navbar />
      <div className="flex flex-col flex-1 h-full">{children}</div>
    </div>
  );
}

export default HomeLayout;
