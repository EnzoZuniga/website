require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const targetAddress = new URL(
  process.env.TARGET_ADDRESS || "http://localhost:3025",
);

module.exports = {
  siteMetadata: {
    author: "mark x enzo",
    description:
      "website",
    siteUrl: targetAddress.href.slice(0, -1),
    title: "Hostel",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        watch: true,
        initialScan: false,
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: targetAddress.href.slice(0, -1),
        sitemap: `${targetAddress.href.slice(0, -1)}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: `${__dirname}/src/components/layout.tsx`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/Logo-Gris.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
