import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/ui/Home/Home"),{ ssr: false });
const Layout = dynamic(() => import("@/layout/Layout"),{ ssr: false });

const Page = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Page;
