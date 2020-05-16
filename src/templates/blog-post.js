import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// catch data from graphql, catch pageContext from gatsby-node.js
const BlogPost = ({ data }) => {
    //console.log(pageContext)
    const post = data.gatsbyappsync.getPost
    return (
        <Layout>
            <div>
                <h2>{post.title}</h2>
                <br/>
                <small>Post Date: {post.date}</small>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <br/>
                <small>Post ID: {post.id}</small>
                <br/>
                <small>Post Last Changed At:{new Date(post._lastChangedAt).toLocaleDateString("en-US")}</small>
            </div><br/>
        </Layout>
    )
}

export default BlogPost

// $id is a context passed from gatsby-node.js, the context named 'id' during the createPage() action
export const appSyncQuery = graphql`
query ($id: ID!) {
    gatsbyappsync {
        getPost(id: $id) {
            id
            date
            title
            content
            _lastChangedAt
        }
    }
}`