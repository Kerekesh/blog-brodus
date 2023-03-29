import React from "react";
import "./ContactPage.css"

const ContactPage = () => {
    return (
        <>
            <div className="contact-me">
                <div className="container">
                    <h1>Contact Me</h1>
                    <div className="contact-me-cover">
                        <img src="/images/apple-produkty.jpg" alt="" />
                    </div>

                    <div className="contact-info">
                        <div className="contact-description">
                            <p>Cras condimentum at sem quis interdum. Vestibulum vel leo libero. Maecenas gravida neq est semper hendrerit. Sed suscipit
                                leo sed risus bibendum, ut rutrum elit male suada. Phasellus rutrum leo id ullam corper the bibendum. Nullam eti lobortis sem
                                Praèsent a aliquet justo, at convallis velit. Nunc orci leo, gravida non tincidunt in, laoreet accumsan erat. Donec eu turpis eleif
                                end sagittis elit molestie, condimentum velit. Aliquam elementum nunc mauris, a tristique magna condimentum eget</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage