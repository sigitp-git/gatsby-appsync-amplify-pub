import React from "react"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import { MdSend } from 'react-icons/md'

//import { v4 as uuidv4 } from 'uuid'
//import Amplify from '@aws-amplify/core'
//import { Auth } from 'aws-amplify'
import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { DataStore, Predicates } from "@aws-amplify/datastore"
import { Blog, Post, Comment } from "../models"
import awsmobile from "../aws-exports"
Amplify.configure(awsmobile)

const PostBlog = () => {
    const { register, handleSubmit, errors } = useForm()

    let today = new Date().toISOString().slice(0, 10)

    async function onSubmit (data) {
        // console.log(data.postid)
        // console.log(data.posttitle)
        // console.log(data.postcontent)
        // console.log(today)
        await DataStore.save(new Post({title: data.posttitle, date: today, content: data.postcontent}))
        document.getElementById("postblogform").reset();
    }

    return (
        <Layout>
            <AmplifyAuthenticator>
            <div>
                <form id="postblogform" onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type="text" placeholder="Post ID" name="postid" ref={register({required: "POST ID REQUIRED", minLength: {value: 1, message: "TOO SHORT"}})}/><br/>{errors.postid && <p>{errors.postid.message}</p>} */}
                    <input type="text" placeholder="Post Title" name="posttitle" ref={register({required: "POST TITLE REQUIRED", minLength: {value: 5, message: "TOO SHORT"}})}/><br/>{errors.posttitle && <p>{errors.posttitle.message}</p>}
                    <textarea placeholder="Post Content" name="postcontent" rows="10" cols="100" ref={register({required: "POST CONTENT REQUIRED", minLength: {value: 10, message: "TOO SHORT"}})}/> <br/>{errors.postcontent && <p>{errors.postcontent.message}</p>}
                    <button style={{"float": "left"}} type="submit" className="btn">Submit <MdSend className="btn-icon"/></button><br/>
                </form>
            </div>
            <div>
                <AmplifySignOut />
                <br/>
                <br/>
            </div>
            </AmplifyAuthenticator>
        </Layout>
    )

}

//export default withAuthenticator(PostBlog)
export default PostBlog
