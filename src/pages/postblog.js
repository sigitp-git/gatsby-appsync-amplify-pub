import React from "react"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import { MdSend } from 'react-icons/md'

import { v4 as uuidv4 } from 'uuid'
import Amplify from "@aws-amplify/core"
import { DataStore, Predicates } from "@aws-amplify/datastore"
import { Blog, Post, Comment } from "../models"
import awsConfig from "../aws-exports"
Amplify.configure(awsConfig)

const PostBlog = () => {
    const { register, handleSubmit, errors } = useForm()

    async function onSubmit (data) {
        console.log(data.postid)
        console.log(data.posttitle)
        console.log(data.postcontent)
        await DataStore.save(new Post({postBlogId: "3b51348c-9e21-42ad-b186-6cd157c4b3d1", title: data.posttitle, content: data.postcontent}))
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input type="text" placeholder="Post ID" name="postid" ref={register({required: "POST ID REQUIRED", minLength: {value: 1, message: "TOO SHORT"}})}/><br/>{errors.postid && <p>{errors.postid.message}</p>} */}
                <input type="text" placeholder="Post Title" name="posttitle" ref={register({required: "POST TITLE REQUIRED", minLength: {value: 5, message: "TOO SHORT"}})}/><br/>{errors.posttitle && <p>{errors.posttitle.message}</p>}
                <input type="text" placeholder="Post Content" name="postcontent" ref={register({required: "POST CONTENT REQUIRED", minLength: {value: 10, message: "TOO SHORT"}})}/> <br/>{errors.postcontent && <p>{errors.postcontent.message}</p>}
                <button style={{"float": "left"}} type="submit" className="btn">Submit <MdSend className="btn-icon"/></button><br/>
            </form>
        </Layout>
    )

}

export default PostBlog