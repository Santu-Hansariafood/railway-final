import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/layout/Layout"),{ ssr: false });
const About = dynamic(() => import("@/components/ui/About/About"),{ ssr: false });

const Page = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default Page;
