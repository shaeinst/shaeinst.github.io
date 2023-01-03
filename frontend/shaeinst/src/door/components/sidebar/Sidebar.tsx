import { useLocation } from "react-router-dom";
import "./sidebar.scss";
import {
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon,
    ListIcon,
    RootState,
} from "../..";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { themeMode } = useSelector((state: RootState) => state.theme);

    let fillColor = "#ffffff";
    if (themeMode === "day") fillColor = "#010101";

    const styleProfile = {
        backgroundColor: themeMode === "day" ? "#ffffff" : "#010101",
    };

    const location = useLocation();
    // console.log(location.pathname);
    const showName = () => {
        return location.pathname === "/" ? false : true;
    };

    return (
        <div className="side">
            <div className="profile">
                <div className="profile__picture" style={styleProfile}></div>
                <div className="profile__name">
                    {showName() ? "Ali Shahid" : ""}
                </div>
            </div>

            <div className="info">
                <div className="skills">
                    <div className="list">
                        <ListIcon />
                        &nbsp; Software Engineer
                    </div>
                    <div className="list">
                        <ListIcon />
                        &nbsp; Researcher
                    </div>
                </div>

                <div className="social__links">
                    <a
                        href="https://github.com/shaeinst"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <GithubIcon
                            style={{ fill: `${fillColor}` }}
                            className="social github"
                        />
                    </a>

                    <a
                        href="https://linkedin.com/in/shaeinst/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <LinkedinIcon
                            style={{ fill: `${fillColor}` }}
                            className="social linkedin"
                        />
                    </a>

                    <a
                        href="https://twitter.com/shaeinst"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <TwitterIcon
                            style={{ fill: `${fillColor}` }}
                            className="social twitter"
                        />
                    </a>
                    <a
                        href="https://github.com/shaeinst"
                        // href="mailto:someone@yoursite.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <EmailIcon
                            style={{ fill: `${fillColor}` }}
                            className="social email"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
