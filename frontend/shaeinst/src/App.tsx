import { FC, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { Routes, Route } from "react-router-dom";

import {
    Navbar,
    Sidebar,
    HomePage,
    Skills,
    Projects,
    EduExp,
    Articles,
    NotFound,
    RootState,
    updateDimension,
} from "./door";
import "./app.scss";
import { useDispatch, useSelector } from "react-redux";

const App: FC = () => {
    /* ──────────────────────────────────────────────────── */
    /* ───────────────────────  THEME  ──────────────────── */

    const [themeMode, setThemeMode] = useLocalStorage<string>(
        "theme_mode",
        "day"
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
        setThemeMode(themeMode === "day" ? "night" : "day");
    };

    useEffect(() => {
        themeMode === "day" ? dayMode() : nightMode();
    }, [themeMode]);

    /* ───────────────────  end THEME  ──────────────────── */
    /* ──────────────────────────────────────────────────── */

    /* ──────────────────────────────────────────────────── */
    /* ──────────────────  Window Size  ─────────────────── */
    const dispatch = useDispatch();

    const { screenWidth } = useSelector((state: RootState) => state.dimension);

    useEffect(() => {
        dispatch(
            updateDimension({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            })
        );

        return () => {};
    }, []);
    /* ──────────────── end  Window Size  ───────────────── */
    /* ──────────────────────────────────────────────────── */

    // console.log(screenSize.dynamicWidth);

    return (
        <div id="App">
            {/* ──────────  sidebar  ──────── */}
            {screenWidth > 768 && (
                <div id="sidebar">
                    <Sidebar themeMode={themeMode} />
                </div>
            )}

            {/* ───────────  navbar  ───────── */}
            <div id="navbar">
                <Navbar themeModeState={{ toggleThemeMode, themeMode }} />
            </div>

            {/* ──────────  container  ─────── */}
            <div id="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="home">
                                <HomePage />
                                {screenWidth < 768 && (
                                    <div id="sidebar">
                                        <Sidebar themeMode={themeMode} />
                                    </div>
                                )}
                            </div>
                        }
                    />
                    <Route
                        path="/skills"
                        element={<Skills themeMode={themeMode} />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects themeMode={themeMode} />}
                    />
                    <Route path="/edu_exps" element={<EduExp />} />
                    <Route path="/articles" element={<Articles />} />

                    {/* if no url matchs (404 not found) */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
