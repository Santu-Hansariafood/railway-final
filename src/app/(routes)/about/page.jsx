import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/layout/Layout"));
const About = dynamic(() => import("@/components/ui/About/About"));

const Page = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default Page;
