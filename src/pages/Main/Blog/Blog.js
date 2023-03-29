import React from 'react'
import './Blog.css'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

const Blog = () => {
    return (
        <div className="blog container">
            <div className="blog-wrap flex">
                <Content></Content>
                <Sidebar></Sidebar>
            </div>
        </div>

    )
}

export default Blog