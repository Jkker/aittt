/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["animal-avatar-generator"]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination:
          "https://cs.nyu.edu/courses/fall22/CSCI-UA.0467-001/_site/",
        permanent: false,
      },
    ];
  },
};

module.exports = withTM(nextConfig);
