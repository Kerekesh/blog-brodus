import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../../fontawesome.js'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'


// eslint-disable-next-line react/prop-types
const ContentItem = ({ id, category, title, description, image }) => {

    const [like, setLike] = useState(false)

    const changeLike = () => {
        setLike(!like)
    }

    return (
        <div className="post-item" key={id}>
            <div className="post-wrap">
                <div className="post-thumb">
                    <a className="thumb-holder" href="">
                        <img src={image} />
                    </a>
                </div>
                <div className="post-content flex">
                    <div className="post-category">
                        <a href="#">{category}</a>
                    </div>
                    <Button onClick={() => changeLike(id)} className={"button", "post-like"}>

                        {like ? <FontAwesomeIcon icon={['fas', 'heart']} /> : <FontAwesomeIcon icon={['far', 'heart']} />}
                        {/* <FontAwesomeIcon icon={['fas', 'heart']} /> */}
                    </Button>
                    {/* <Button
                        variant="outlined"
                        onClick={() => isLiked ? removeLike(id) : addLike(id)}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button> */}
                    <h3 className="post-title">
                        <a href="#">{title}</a>
                    </h3>
                    <div className="post-excerpt">
                        <p>{description}</p>
                    </div>
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
                                    <img src="/images/share-fx.png" alt="share" />
                                    <span>share</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(ContentItem)