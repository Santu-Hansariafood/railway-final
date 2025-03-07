
"use client";

import dynamic from "next/dynamic";

const Home = dynamic(()=>import('@/components/ui/Home/Home'))
const Layout = dynamic(()=>import('@/layout/Layout'))

const Page = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default Page