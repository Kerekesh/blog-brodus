import React from 'react'

const About = () => {
    return (
        <div className="about-section">
            <h3 className="post-title">
                About Me
            </h3>
            <div className="container">
                <div className="about-cover">
                    <img src="/images/aboutExtendedImage.jpg" alt="About-Me" />
                </div>
                <div className="about-info">
                    <div className="about-description">
                        <p>Sed non mauris vitae erat consequa auctor eu in elit. Class taciti soc iosqu ad litora torquent per conubia nostra, pinceptos himenaos. Maurian erat justo. Nullam ac urna eu felis dapibus a condiment sit amet a augue. Sed non neque elitimp erdiet nisi condimentum.
                        </p>
                        <p>Nunc eu dui nisi. Aliquam dui nunc, mollis elementum libero at malu ada dictum dolor. Etiam volutpat arcu nec mollis congue. Suspendi ut volutpat est. quis sollicitudin felis. Lorem ipsum dolor consectetur.
                        </p>
                        <p>Aenean sit amet convalis est. Nulla drerit finibus ntedum. Curabitur diam ante, pretium vel felis et. pretium venenatis ipsum. Nullam digni nunc in mauris fermentum laoreet. Suspendisse consectetur laoreet elit venenatis tincidunt. Sed imperdiet odio tellus, sit ame sit amet.
                        </p>
                        <p>Quisque malesuada consectetur lacinia. Morbi diam ante, lacinia quis ligula et. pretium tempus ante. Quisque vitae nisi felis.
                        </p>
                    </div>
                    <div className="about-signature">
                        <img src="/images/BrookStratfor.png" alt="BrookStratfor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About