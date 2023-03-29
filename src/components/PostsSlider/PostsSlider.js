import React, { Component } from "react"
import Slider from "react-slick"
import PostsSliderItems from "./PostsSliderItems";
import postsArray from "../Posts/postsArray";

class PostsSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: false
        };
        return (
            <div>
                <Slider {...settings}>
                    {postsArray.slice(0, 4).map(({ id, category, title, image }) => (
                        <PostsSliderItems
                            key={id}
                            id={id}
                            category={category}
                            title={title}
                            image={image}
                        >
                        </PostsSliderItems>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default PostsSlider