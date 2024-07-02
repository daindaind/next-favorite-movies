import { fetchMoviesList } from "@/api";
import Button from "@/components/common/Button";
import MoviePosterSlide from "@/components/movies/MoviePosterSlide";
import React from "react";

function MoviesPage({data}) {
  return (
    <div className="flex flex-col justify-center h-screen">
      <h3 className="ml-6 mb-1 text-gray-08 font-light text-3xl">내가 가장 좋아하는 작품들</h3>
      <h5 className="flex mb-3 flex-wrap ml-6 text-gray-08 font-light text-xl">당신의 작품을 공유해주세요.</h5>
      <div className="ml-6 mb-20">
        <Button label="Post Your Movies"/>
      </div>
      <MoviePosterSlide movieData={data}/>
    </div>
  );
}

export default MoviesPage;

export async function getServerSideProps() {
  const response = await fetchMoviesList();

  return {
    props: {
      data: response.data,
    },
  };
}