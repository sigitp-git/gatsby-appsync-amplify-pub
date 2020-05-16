import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  // const siteTitle = data.gatsbyappsync.listBlogs.items.name
  // const posts = data.gatsbyappsync.listPosts.items
  // const { currentPage, numPages } = pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  // const nextPage = (currentPage + 1).toString()

  // console.log(data)
  // console.log(pageContext)

  return (
  <Layout>
    <SEO title="AppSync Query" />
    <div>
    <h4>Total Post: {data.gatsbyappsync.listPosts.items.length}, post a blog <Link to="/postblog"><u>here</u></Link></h4>
    </div>
    {
      data.gatsbyappsync.listPosts.items.map((item, index) =>(
          <div key={index}>
              <Link to={item.id}><h3>{item.title}</h3></Link>
              <small>Post Date: {item.date}</small>
              {/* <small>Post ID: {item.id}</small> */}
              {/* <small>Last Changed At: {new Date(item._lastChangedAt).toLocaleDateString("en-US")}</small> */}
              <p><strong>Excerpt: </strong><br/> {item.content.substr(0, 100)}...</p>
              <Link to={item.id}>read more ></Link><br/><br/>
              <hr/>
          </div>
      ))
    }
  </Layout>
  )
}

export default IndexPage

export const appSyncQuery = graphql`
query indexQuery {
  gatsbyappsync {
    listBlogs(limit: 10) {
      items {
        id
        name
      }
    }
    listPosts(limit: 1000) {
      items {
        id
        title
        date
        content
        _lastChangedAt
      }
    }
    listComments(limit: 50) {
      items {
        id
        content
      }
    }
  }
}`