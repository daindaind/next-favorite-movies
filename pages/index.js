import FirstUI from "@/components/home/FirstUI";
import SecondUI from "@/components/home/SecondUI";
import ThirdUI from "@/components/home/ThirdUI";
import { fetchMoviesList } from "@/api";

export default function Home({data}) {
  return (
    <main>
      <FirstUI data={data}/>
      <SecondUI data={data}/>
      <ThirdUI data={data}/>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetchMoviesList();

  return {
    props: {
      data: response.data,
    },
  };
}
