import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HomeIcon, MoonIcon, SunIcon } from "../../../assets";
import "./navbar.scss";

const Navbar = ({ themeModeState }: any) => {
    const [activeArticle, setActiveArticle] = useState<Boolean>(false);
    const [homeFillColor, setHomeFillColor] = useState<string>("");

    const location = useLocation();

    /* ──────────────────────────────────────────────────── */
    //  change the navigation item's color according to theme-mode
    /* ──────────────────────────────────────────────────── */
    const [textColor, setTextColor] = useState(
        themeModeState.themeMode === "night" ? "#ffffff" : "#010101"
    );
    let style = {
        color: textColor,
    };
    useEffect(() => {
        setTextColor(() => {
            return themeModeState.themeMode === "night" ? "#ffffff" : "#010101";
        });
    }, [themeModeState.themeMode]);
    /* ──────────────────────────────────────────────────── */

    useEffect(() => {
        if (location.pathname === "/articles") {
            setActiveArticle(true);
            themeModeState.themeMode === "night"
                ? setHomeFillColor("#010101")
                : setHomeFillColor("#ffffff");
        } else {
            setActiveArticle(false);
            setHomeFillColor("#707ef5");
        }
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar__global">
                <div className="navbar__global-left">
                    {/* ────────────────────────────────────── */}
                    {/* ──────────────── HOME ──────────────── */}
                    <NavLink
                        to="/"
                        style={style}
                        className={"nav__item home"}
                        end
                    >
                        <HomeIcon fill={homeFillColor} stroke={textColor} />
                    </NavLink>

                    {/* ────────────────────────────────────── */}
                    {/* ─────────────── ARTICLES ────────────── */}
                    <NavLink
                        to="/articles"
                        style={style}
                        className={({ isActive }) =>
                            isActive
                                ? "nav__item articles active__link-global"
                                : "nav__item articles"
                        }
                    >
                        Articles
                    </NavLink>
                </div>

                {/* ────────────────────────────────────── */}
                {/* ───────────── THEME TOGGLE ─────────── */}
                <div
                    className="theme__toggle"
                    onClick={themeModeState.toggleThemeMode}
                >
                    {themeModeState.themeMode === "night" ? (
                        <SunIcon />
                    ) : (
                        <MoonIcon />
                    )}
                </div>
                {/* ────────────────────────────────────── */}
            </div>

            <div
                className="navbar__local"
                style={activeArticle ? { visibility: "hidden" } : {}}
            >
                {/* ────────────────────────────────────── */}
                {/* ──────────────── Home ──────────────── */}
                <NavLink
                    to="/"
                    style={style}
                    className={({ isActive }) =>
                        isActive
                            ? "nav__item home active__link"
                            : "nav__item home"
                    }
                    end
                >
                    Home
                </NavLink>

                {/* ────────────────────────────────────── */}
                {/* ─────────────── SKILLS ─────────────── */}
                <NavLink
                    to="/skills"
                    style={style}
                    className={({ isActive }) =>
                        isActive
                            ? "nav__item skill active__link"
                            : "nav__item skill"
                    }
                    end
                >
                    Skills
                </NavLink>

                {/* ────────────────────────────────────── */}
                {/* ────────────── PROJECTS ────────────── */}
                <NavLink
                    to="/projects"
                    style={style}
                    className={({ isActive }) =>
                        isActive
                            ? "nav__item project active__link"
                            : "nav__item project"
                    }
                >
                    Projects
                </NavLink>

                {/* ────────────────────────────────────── */}
                {/* ─────────────── EDU_EXP ────────────── */}
                <NavLink
                    to="/edu_exps"
                    style={style}
                    className={({ isActive }) =>
                        isActive
                            ? "nav__item edu_exps active__link"
                            : "nav__item edu_exps"
                    }
                >
                    Edu/Exp
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
