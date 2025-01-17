/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/, 
        },
      },
    },
  ],
  siteMetadata: {
    businessDetails: {
      name: "negroni time",
      hours: "2-11pm",
      days: "every day",
      address: "1234 pizza st.",
      phone: "+1 (555)555-5555",
      email: "reservations@negronitime.pizza",
    },
  },
}
