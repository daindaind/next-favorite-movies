import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useLoading } from "@/hooks/useLoading";
import HomeLayout from "@/layouts/HomeLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const isLoading = useLoading();
  return (
    <HomeLayout>
      {isLoading ? <LoadingSpinner /> : null}
      <Component {...pageProps} />
    </HomeLayout>
  );
}
