/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // Ensures compatibility with Netlify
    experimental: {
      optimizeCss: false, // Disable this to prevent entryCSSFiles error
    },
  };
  
  export default nextConfig;
  