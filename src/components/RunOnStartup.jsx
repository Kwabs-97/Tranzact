"use client";
import { useEffect } from "react";
import { uploadFileDataToDB } from "@/actions/actions";
function RunOnStartup() {
  useEffect(() => {
    const runUpload = async () => {
      console.log("Running data upload...");
      await uploadFileDataToDB();
      console.log("Data upload completed.");
    };

    runUpload();
  }, []); // Empty dependency array means this runs once on component mount

  return null; // This component doesn’t render anything
}

export default RunOnStartup;
