import {
    BlockchainIcon,
    OpensourceIcon,
    ResearchIcon,
    RustIcon,
} from "$exporter/asset";


export default function Page() {

    return (
        <section className="middle-section" id="middle-section">
            <div className="about-me">
                <p>
                    I'm a software engineer focused on building reliable, scalable systems. Since 2017, I've specialized in crafting
                    efficient runtimes, strong type-safe tooling, and clear architectures that perform at scale. I have experience
                    designing backend services, APIs, event-driven pipelines, user interfaces, and blockchain-based solutions.
                    I'm deeply interested in mathematics and physics, and I enjoy exploring ideas through research and experimentation.
                    I'm always open to collaboration, networking, and meaningful opportunities in tech.
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
                        <img src={ResearchIcon} alt="skill icon" />
                        <span>Research</span>
                    </div>
                    <div className="skill">
                        <img src={OpensourceIcon} alt="skill icon" />
                        <span>Opensource</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
