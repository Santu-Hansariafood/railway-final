import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/layout/Layout"),{ ssr: false });
const Services = dynamic(() => import("@/components/ui/Services/Services"),{ ssr: false });

const page = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default page;
