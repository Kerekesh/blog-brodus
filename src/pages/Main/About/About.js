import React from 'react'

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="about-cover">
                    <img src="/images/cropped-priscilla-du-preez-216789-unsplash-min.jpg" alt="" />
                </div>

                <div className="about-info">
                    <div className="about-signature">
                        <img src="/images/BrookStratfor.png" alt="BrookStratfor" />
                    </div>
                    <div className="about-description">
                        <p>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti soc iosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maurian erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed utimp erdiet nisi. Proin condimentum.</p>
                    </div>
                    <div className="about-more">
                        <a href="/about" className="button">More about Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About