import React from "react"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"

const PostBlog = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Post ID" name="postid" ref={register({required: true, minLength: 1})}/><br/>{errors.postid && <p>Post ID can't be empty</p>}
                <input type="text" placeholder="Post Title" name="posttitle" ref={register({required: true, minLength: 5})}/><br/>{errors.posttitle && <p>Post Title can't be empty</p>}
                <input type="text" placeholder="Post Content" name="postcontent" ref={register({required: true, minLength: 10})}/> <br/>{errors.postcontent && <p>Post Content can't be empty</p>}
                <input type="submit"/>
            </form>
        </Layout>
    )

}

export default PostBlog