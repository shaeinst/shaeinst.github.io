import {
    DribbbleIcon,
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
    LocationIcon,
    TwitterIcon,
} from "$exporter/asset";
import { ContactForm, SocialBtn } from "$exporter/component";


export default function Page() {

    let myEmail = "contact@alixshahid.com"

    return (
        <section className="footer" id="bottom-section">
            <div className="footer-title">
                <span>Get In Touch</span>
            </div>
            {/* <ContactForm /> */}
            <div className="information-container">
                <div className="information-title">
                    <span>Connect With Me</span>
                </div>
                <div className="information-box">
                    <div className="information">
                        <img src={EmailIcon} alt="email_icon" />
                        <div className="email">
                            <span>Email</span>
                            <p>{myEmail}</p>
                        </div>
                    </div>
                    {/* Disable Location for now */}
                    {/* <div className="information"> */}
                    {/*     <img src={LocationIcon} alt="location_icon" /> */}
                    {/*     <div className="email"> */}
                    {/*         <span>Location</span> */}
                    {/*         <p>San Francisco, CA</p> */}
                    {/*     </div> */}
                    {/* </div> */}
                </div>
                <div className="social-link-container">
                    <div className="social-link-title">
                        <span>Social Media</span>
                    </div>
                    <div className="social-link">
                        <SocialBtn icon={GithubIcon} link="https://github.com/AlixShahid" alt="github" />
                        <SocialBtn icon={LinkedinIcon} link="https://linkedin.com/in/AlixShahid" alt="linkedin" />
                        {/* <SocialBtn icon={TwitterIcon} link="hello.com" alt="twitter" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
