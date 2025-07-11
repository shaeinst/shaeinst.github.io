import {
    BlockchainIcon,
    LaptopIcon,
    MinimalIcon,
    RustIcon,
} from "$exporter/asset";


export default function Page() {

    return (
        <section className="middle-section" id="middle-section">
            <div className="about-me">
                <p>
                    I'm a software engineer with a passion for creating elegant,
                    efficient solutions to complex problems. With over 8 years of
                    experience in full-stack development, I specialize in building
                    scalable web applications and intuitive user interfaces. My approach
                    combines technical expertise with creative problem-solving, allowing
                    me to bridge the gap between design and functionality.
                </p>
            </div>
            <div className="skill-container">
                <div className="skill-title">
                    <h2>Interests & Expertise</h2>
                </div>
                <div className="skills">
                    <div className="skill">
                        <img src={BlockchainIcon} alt="skill icon" />
                        <span>Blockchain</span>
                    </div>
                    <div className="skill">
                        <img src={RustIcon} alt="skill icon" />
                        <span>Rust</span>
                    </div>
                    <div className="skill">
                        <img src={LaptopIcon} alt="skill icon" />
                        <span>UI Engineering</span>
                    </div>
                    <div className="skill">
                        <img src={MinimalIcon} alt="skill icon" />
                        <span>Minimal Art</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
