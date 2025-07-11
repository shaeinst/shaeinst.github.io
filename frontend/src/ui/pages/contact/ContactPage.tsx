import {
    DribbbleIcon,
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
    LocationIcon,
    TwitterIcon,
} from "$exporter/asset";
import { ContactForm } from "$exporter/component";


export default function Page() {

    return (
        <>
            <div className="footer-title">
                <span>Get In Touch</span>
            </div>

            <section className="footer" id="bottom-section">
                <ContactForm />
                <div className="information-container">
                    <div className="information-title">
                        <span>Connect With Me</span>
                    </div>
                    <div className="information-box">
                        <div className="information">
                            <img src={EmailIcon} alt="email_icon" />
                            <div className="email">
                                <span>Email</span>
                                <p>alex@example.com</p>
                            </div>
                        </div>
                        <div className="information">
                            <img src={LocationIcon} alt="location_icon" />
                            <div className="email">
                                <span>Location</span>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-link-container">
                        <div className="social-link-title">
                            <span>Social Media</span>
                        </div>
                        <div className="social-link">
                            <img src={GithubIcon} alt="github_icon" />
                            <img src={LinkedinIcon} alt="linkedin_icon" />
                            <img src={TwitterIcon} alt="twitter_icon" />
                            <img src={DribbbleIcon} alt="dribbble_icon" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
