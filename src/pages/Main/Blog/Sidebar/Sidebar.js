import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="widgets">
                <div className="post-slider-widget widget">
                    <div className="owl-stage">
                        <div className="owl-item relative">
                            <div className="img-filter relative">
                                <div className="post-thumb">
                                    <img src="./images/water-fall-river-lake-travel-adventure.jpg" alt="" />
                                </div>
                            </div>
                            <div className="post-content flex absolute">
                                <div className="post-category">
                                    <a href="#">travel</a>
                                </div>
                                <h3 className="post-title">
                                    <a href="#">Finding Art Theme</a>
                                </h3>
                                <div className="post-meta">
                                    <div className="meta-item">
                                        <div className="meta-date">apr 09, 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav relative flex">
                        <button type="button">
                            <div className="la la-long-arrow-left"></div>
                        </button>
                        <button type="button">
                            <div className="la la-long-arrow-right"></div>
                        </button>
                    </div>
                </div>
                <div className="about-me-widget widget">
                    <h3 className="widget-title">About Me</h3>
                    <div className="author-box flex">
                        <div className="auth-avatar">
                            <img src="./images/me_cover_user-150x150.jpg" alt="" />
                        </div>
                        <div className="auth-description">
                            <p>Sed nomauris vitae erat consequuctor eu inelit. Class aptent taciti sociosqud lito.</p>
                        </div>
                        <ul className="auth-socials socials">
                            <li className="social-item"><a href="#" className="fab fa-instagram" target="_blank" title="Instagram"></a></li>
                            <li className="social-item"><a href="#" className="fab fa-twitter" target="_blank" title="Twitter"></a></li>
                            <li className="social-item"><a href="#" className="fab fa-pinterest" target="_blank" title="Pinterest"></a></li>
                        </ul>
                    </div>
                </div>

                <div className="insta-widget widget">
                    <h3 className="widget-title">Instagram</h3>
                </div>

                <div className="form-widget widget">
                    <h3 className="widget-title">Subscribe</h3>
                    <form method="post" className="form">
                        <div className="form-fields">
                            <div className="subscribe">
                                <p>By submitting through this form you agree our terms of storage.</p>
                                <div className="relative">
                                    <input type="email" name="email" placeholder="Email address" required />
                                    <button type="submit" className="absolute la la-paper-plane"></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="posts-widget widget">
                    <h3 className="widget-title">Handpicked</h3>
                    <div className="post-widget">
                        <div className="post-item flex">
                            <div className="post-thumb relative">
                                <img src="./images/nordwood-themes-439624-unsplash-min-77x77.jpg" alt="" />
                            </div>
                            <div className="post-content flex">
                                <div className="post-category">
                                    <a className="category-link" href="#">Fashion</a>
                                </div>
                                <h3 className="post-title">
                                    <a href="#">Black Coat Forever</a>
                                </h3>
                            </div>
                        </div>
                        <div className="post-item flex">
                            <div className="post-thumb relative">
                                <img src="./images/julian-o-hayon-257567-unsplash-77x77.jpg" alt="" />
                            </div>
                            <div className="post-content flex">
                                <div className="post-category">
                                    <a className="category-link" href="#">LIFESTYLE</a>
                                </div>
                                <h3 className="post-title">
                                    <a href="#">Never Ending Summer</a>
                                </h3>
                            </div>
                        </div>
                        <div className="post-item flex">
                            <div className="post-thumb relative">
                                <img src="./images/osman-rana-312128-unsplash-min-re-77x77.jpg" alt="" />
                            </div>
                            <div className="post-content flex">
                                <div clasclassNames="post-category">
                                    <a className="category-link" href="#">TRAVEL</a>
                                </div>
                                <h3 className="post-title">
                                    <a href="#">Neutral Territory</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar