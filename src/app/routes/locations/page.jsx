import dynamic from "next/dynamic";
const Locations = dynamic(()=>import("@/components/ui/Locations/Locations"),{ ssr: false });
const Layout = dynamic(()=>import("@/layout/Layout"),{ ssr: false });

const Page = () => {
  return (
    <Layout>
      <Locations />
    </Layout>
  );
};

export default Page;
