import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import {
    HomeIcon,
    MoonIcon,
    RootState,
    SunIcon,
    updateThemeMode,
} from "../../../";
import "./stylesNavbarPrimary.scss";

const Navbar = () => {
    const [homeFillColor, setHomeFillColor] = useState<string>("");
    const location = useLocation();
    const dispatch = useDispatch();

    /* ──────────────────────────────────────────────────── */
    /* ───────────────────────  THEME  ──────────────────── */

    const themeModeState = useSelector((state: RootState) => state.theme);

    const [themeMode, setThemeMode] = useLocalStorage<string>(
        "theme_mode",
        themeModeState.themeMode
    );

    const dayMode = () => {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#010101";
    };
    const nightMode = () => {
        document.body.style.backgroundColor = "#010101";
        document.body.style.color = "#ffffff";
    };

    const toggleThemeMode = () => {
        const mode = themeMode === "day" ? "night" : "day";
        setThemeMode(mode);
        dispatch(updateThemeMode({ themeMode: mode }));
    };

    useEffect(() => {
        themeMode === "day" ? dayMode() : nightMode();
    }, [themeMode]);
    /* ───────────────────  end THEME  ──────────────────── */
    /* ──────────────────────────────────────────────────── */

    /* ──────────────────────────────────────────────────── */
    //  change the navigation item's color according to theme-mode
    /* ──────────────────────────────────────────────────── */
    const [textColor, setTextColor] = useState(
        themeMode === "night" ? "#ffffff" : "#010101"
    );
    let style = {
        color: textColor,
    };
    useEffect(() => {
        setTextColor(() => {
            return themeMode === "night" ? "#ffffff" : "#010101";
        });
    }, [themeMode]);
    /* ──────────────────────────────────────────────────── */

    useEffect(() => {
        if (location.pathname === "/articles") {
            themeMode === "night"
                ? setHomeFillColor("#010101")
                : setHomeFillColor("#ffffff");
        } else {
            setHomeFillColor("#707ef5");
        }
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar__global-left">
                {/* ────────────────────────────────────── */}
                {/* ──────────────── HOME ──────────────── */}
                <NavLink to="/" style={style} className={"nav__item home"} end>
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
            <div className="theme__toggle" onClick={toggleThemeMode}>
                {themeMode === "night" ? <SunIcon /> : <MoonIcon />}
            </div>
            {/* ────────────────────────────────────── */}
        </nav>
    );
};
export default Navbar;
