import { NavLink } from "react-router-dom";
import "./stylesNavbarSecondary.scss";

const Navbar = () => {
    return (
        <nav className="secondary__navbar">
            {/* ────────────────────────────────────── */}
            {/* ─────────────── SKILLS ─────────────── */}
            <NavLink
                to="/skills"
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
                className={({ isActive }) =>
                    isActive
                        ? "nav__item edu_exps active__link"
                        : "nav__item edu_exps"
                }
            >
                Edu/Exp
            </NavLink>
        </nav>
    );
};
export default Navbar;
