import dynamic from "next/dynamic";
const Locations = dynamic(()=>import("@/components/ui/Locations/Locations"));
const Layout = dynamic(()=>import("@/layout/Layout"));

const Page = () => {
  return (
    <Layout>
      <Locations />
    </Layout>
  );
};

export default Page;
