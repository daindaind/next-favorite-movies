import Image from "next/image";
import React from "react";

const img = "https://i.namu.wiki/i/pllV4gMlOsxdBXqI2yTjvS2RwY6KtmydQ0cEp97PqcDQSS_sBDtTBd7a_EQ_iljKxhmY-OSCixS3fMnXCjdC_Q.webp";

function MovieDetailPage() {
  return (
    <div className="flex flex-col justify-center align-middle h-4/5 m-5 gap-10">
      <div className="flex flex-col self-center w-4/5">
        <div className="flex flex-row gap-5">
          <Image src={img} width={250} height={360} alt="Poster" className="bg-gray-08 rounded-md shadow-md" />
          <div className="flex flex-col gap-3">
            <p className=" inline-block text-2xl text-default-text font-bold p-1">제목</p>
            <p className="inline-block text-sm text-default-text p-1">작성자</p>
            <p className=" inline-block text-sm text-default-text p-1">요약</p>
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl mt-8">
          <p className="text-sm text-default-text font-light whitespace-pre-line"></p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
