import { makeStyles } from '@material-ui/core'
import React from 'react'
import '../../pages/Main/Main.css'

const useStyles = makeStyles({
    slider: {
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        position: "relative",
        fontFamily: "Poppins",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    sliderImg: {
        minWidth: "100%",
        minHeight: "100%",
        flexShrink: 0
    },
    title: {
        fontFamily: "Mukta"
    }
})

// eslint-disable-next-line react/prop-types
const PostsSliderItems = ({ id, category, title, image }) => {
    const classes = useStyles()
    return (
        <div className={classes.slider} key={id}>
            <img className={classes.sliderImg} src={image} />
            <div className="slider-content">
                <div className="post-category"><a href="">{category}</a></div>
                <h3 className="post-title">
                    <a href="">{title}</a>
                </h3>
                <div className="post-meta">
                    <div className="meta-item">
                        <div className="meta-author"><a href="">Carolina Herera</a></div>
                    </div>
                    <div className="meta-item">
                        <div className="meta-date">apr 09, 2019</div>
                    </div>
                    <div className="meta-item">
                        <div className="post-share">
                            <a href="#">
                                <img src="/images/share.png" alt="share" />
                                <span>share</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsSliderItems