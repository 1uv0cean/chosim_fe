"use client";

import BlinkText from "@/components/BlinkText";
import { useState } from "react";

const WritePage = () => {
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);

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
          <textarea
            name="content"
            rows={4}
            className="w-full p-3 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="당신의 초심을 적어주세요..."
          ></textarea>

          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          >
            초심 찾기
          </button>
        </form>
      )}
    </div>
  );
};

export default WritePage;
