/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
    query nodeQuery {
        gatsbyappsync {
            listPosts(limit: 100) {
                items {
                    id
                    title
                    content
                }
            }
        }
    }
    `)
    data.gatsbyappsync.listPosts.items.forEach(({ id, title }) => {
        actions.createPage({
        path: id,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
            id: id,
            title: title
        },
        })
    })
}