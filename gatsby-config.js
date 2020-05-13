/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: ["default-site-plugin"],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
  siteMetadata: {
    businessDetails: {
      name: "details",
      hours: "2-11pm",
      days: "every day",
      address: "1234 pizza st.",
      phone: "+1 (555)555-5555",
      email: "reservations@negronitime.pizza",
    },
  },
}
