import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/layout/Layout"));
const Services = dynamic(() => import("@/components/ui/Services/Services"));

const page = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default page;
