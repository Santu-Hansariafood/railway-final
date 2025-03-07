/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // Ensures compatibility with Netlify
    experimental: {
      optimizeCss: true, // Helps with the entryCSSFiles error
    },
  };
  
  export default nextConfig;
  