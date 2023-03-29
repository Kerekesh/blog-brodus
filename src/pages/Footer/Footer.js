import React from 'react'
import './Footer.css'
import Socials from '../Header/Socials/Socials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <h3 className="footer-header">Subscribe to my youtube</h3>
                <div className="footer-content container flex">
                    <p className="content-text">
                        Aenean sollicitudin, lorem quis bibendum auctoisi elit cons equat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>
                    <div className="footer-image">
                        <img src="/images/21_Conta454545ct.jpg" />
                    </div>
                    <div className="subscribe">
                        <a href="#" className="flex">
                            <button className="subscribe-btn button">
                                Subscribe <span>618K</span>
                            </button>
                            {/* <i className="fab fa-youtube"></i> */}
                            <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container flex">
                <div className="row flex">
                    <p className="bottom-text">©2018 Brodus. All Rights Reserved.</p>
                    <Socials></Socials>
                </div>
            </div>
        </div>
    )
}

export default Footer