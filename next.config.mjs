/** @type {import('next').NextConfig} */
const nextConfig = {
  /** 
   * Enable static exports for the App Router
   * 
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository
   * 
   * @see https://next.js.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/",

  /**
   * Disable server-based image optimization 
   * Next.js doesn't support dynamic features with statis exports
   */
  images: {
    unpotimized: true,
  }

};

export default nextConfig;