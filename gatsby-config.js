module.exports = {
  siteMetadata: {
    siteUrl: "https://health-room.netlify.app",
    title: "Health room",
  },
  plugins: [
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-postcss",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog-posts`,
      path: `${__dirname}/src/blog-posts/`,
    },
  },
  ],
};
