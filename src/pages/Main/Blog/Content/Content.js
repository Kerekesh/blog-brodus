import React from 'react'
import postsArray from '../../../../components/Posts/postsArray'
import './Content.css'
import ContentItem from './ContentItem'

const Content = () => {
    return (
        <div className="content-wrap">
            <div className="posts">
                {postsArray.map(({ id, category, title, description, image }) => (
                    <ContentItem
                        key={id}
                        id={id}
                        category={category}
                        title={title}
                        description={description}
                        image={image}
                    >
                    </ContentItem>
                ))}
            </div>

            <nav className="navigation pagination">
                <div className="nav-links flex">
                    <a href="#" className="prev">
                        <div className="flex">
                            <i className="la la-arrow-left"></i>
                            <span>prev</span>
                        </div>
                    </a>
                    <a href="#" className="page-numbers active">1</a>
                    <a href="#" className="page-numbers">2</a>
                    <a href="#" className="page-numbers">3</a>
                    <a href="#" className="page-numbers">4</a>
                    <a href="#" className="next">
                        <div className="flex">
                            <span>next</span>
                            <i className="la la-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Content