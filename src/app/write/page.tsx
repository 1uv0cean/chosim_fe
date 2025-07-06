"use client";

import BlinkText from "@/components/BlinkText";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const WritePage = () => {
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-4">
      <BlinkText
        text="당신의 초심은 무엇이었나요?"
        onComplete={() => setFirstDone(true)}
      />
      {firstDone && (
        <BlinkText
          text="처음 그 마음을 떠올려 보세요. 기억나시나요?"
          onComplete={() => setSecondDone(true)}
        />
      )}

      {secondDone && (
        <form
          className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const content = formData.get("content");
            if (content) {
              console.log("Submitted content:", content);
            }
          }}
        >
          <div>
            <ReactQuill
              theme="snow"
              placeholder="당신의 초심을 적어주세요..."
              value={value}
              onChange={setValue}
              style={{
                height: "300px",
                marginBottom: "40px",
                color: "black",
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          >
            초심 찾기
          </button>
        </form>
      )}
    </div>
  );
};

export default WritePage;
