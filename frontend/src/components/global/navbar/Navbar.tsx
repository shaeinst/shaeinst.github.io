import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, MoonIcon, SunIcon } from "../../../assets";
import "./navbar.scss";

const Navbar = ({ themeModeState }: any) => {
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

    return (
        <nav className="navbar">
            {/* ────────────────────────────────────── */}
            {/* ──────────────── HOME ──────────────── */}
            <NavLink
                to="/"
                style={style}
                className={({ isActive }) =>
                    isActive ? "nav__item home active__link" : "nav__item home"
                }
                end
            >
                <HomeIcon />
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

            {/* ────────────────────────────────────── */}
            {/* ─────────────── ARTICLES ────────────── */}
            <NavLink
                to="/articles"
                style={style}
                className={({ isActive }) =>
                    isActive
                        ? "nav__item articles active__link"
                        : "nav__item articles"
                }
            >
                Articles
            </NavLink>

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
        </nav>
    );
};
export default Navbar;
