import "./home.scss";

const Home = () => {
    return (
        <div className="home__container">
            <div className="name__detail">
                <div className="intro">Hi, I'm</div>
                <div className="name">Ali Shahid</div>
                <div className="quote">
                    {/* i can <span>&lt;</span>/code<span>&gt;</span> */}
                    why are you here?
                </div>
            </div>
            {/* NOTE: use App.tsx to set it */}
            {/* <div className="wave"></div> */}
        </div>
    );
};

export default Home;
