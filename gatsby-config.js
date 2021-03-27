require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const targetAddress = new URL(
  process.env.TARGET_ADDRESS || "http://localhost:3025",
);

module.exports = {
  siteMetadata: {
    author: "@elinoï",
    description:
      "Découvrez les projets et la culture de 50 startups innovantes sélectionnées par elinoï.",
    siteUrl: targetAddress.href.slice(0, -1),
    title: "50 startups où postuler en 2021",
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
      resolve: "gatsby-plugin-hotjar",
      options: {
        id: process.env.REACT_APP_HOTJAR_ID,
        sv: 6,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
        region: process.env.AWS_REGION,
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
        acl: null,
        params: {
          // In case you want to add any custom content types: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/custom-content-type.md
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
        icon: "src/images/elinoi-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
