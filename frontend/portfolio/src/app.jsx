import './app.css'
import Nav from './components/nav'
import ContactForm from './components/form'
import Pagination from './components/pagination'
import image from './assets/user.png'
import rust_icon from './assets/icons/rust.svg'
import blockchain_icon from './assets/icons/blockchain.svg'
import minimal_icon from './assets/icons/minimalart.svg'
import laptop_icon from './assets/icons/uiengineering.svg'
import email_icon from './assets/icons/email.svg'
import location_icon from './assets/icons/location.svg'
import github_icon from './assets/icons/github.svg'
import linkedin_icon from './assets/icons/linkedin.svg'
import twitter_icon from './assets/icons/twitter.svg'
import dribbble_icon from './assets/icons/dribbble.svg'

export function App() {

  return (
    <>
      <Nav />
      <div className="head-container">

        <div className="title">
          <span>ALi</span>
          <span>Shahid</span>
        </div>

        <div className="about-me-title">
          <p>software engineer<span> Math + Physics Aficionado</span></p>
        </div>

        <div className="btn-container">
          <button className='btn'>Find me</button>
        </div>

        <div className="img-container">
          <img src={image} alt="my image" />
        </div>
        <Pagination />
      </div>

      <section className='middle-section'>
        <div className="about-me">
          <p>I'm a software engineer with a passion for creating elegant, efficient solutions to complex problems. With over 8 years of experience in full-stack development, I
            specialize in building scalable web applications and intuitive user interfaces. My approach combines technical expertise with creative problem-solving, allowing me to bridge the gap between design and functionality.</p>
        </div>
        <div className="skill-container">
          <div className="skill-title">
            <h2>Interests & Expertise</h2>
          </div>
          <div className="skills">
            <div className="skill">
              <img src={blockchain_icon} alt="skill icon" />
              <span>Blockchain</span>
            </div>
            <div className="skill">
              <img src={rust_icon} alt="skill icon" />
              <span>Rust</span>
            </div>
            <div className="skill">
              <img src={laptop_icon} alt="skill icon" />
              <span>UI Engineering</span>
            </div>
            <div className="skill">
              <img src={minimal_icon} alt="skill icon" />
              <span>Minimal Art</span>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-title">
        <span>Get In Touch</span>
      </div>
      <section className="footer">
        <ContactForm />
        <div className="information-container">
          <div className="information-title">
            <span>Connect With Me</span>
          </div>
          <div className="information-box">
            <div className="information">
              <img src={email_icon} alt="email_icon" />
              <div className="email">
                <span>Email</span>
                <p>alex@example.com</p>
              </div>
            </div>
            <div className="information">
              <img src={location_icon} alt="location_icon" />
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
              <img src={github_icon} alt="github_icon" />
              <img src={linkedin_icon} alt="linkedin_icon" />
              <img src={twitter_icon} alt="twitter_icon" />
              <img src={dribbble_icon} alt="dribbble_icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
