import {
    UserImage,
} from "$exporter/asset";
import { Nav, Pagination } from "$exporter/component";


export default function Page() {
    const ScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <section id="top-section">
            <Nav />
            <div className="head-container">
                <div className="title">
                    <span>ALi</span>
                    <span>Shahid</span>
                </div>

                <div className="about-me-title">
                    <p>
                        software engineer<span> Math + Physics Aficionado</span>
                    </p>
                </div>

                <div className="btn-container">
                    <button onClick={ScrollToBottom} className="btn">
                        Find me
                    </button>
                </div>

                <div className="img-container">
                    <img src={UserImage} alt="my image" />
                </div>
                <Pagination />
            </div>
        </section>

    );
}
