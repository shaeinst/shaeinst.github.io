import React, { FC, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Routes, Route, useLocation } from "react-router-dom";

import {
    Navbar,
    Sidebar,
    Home,
    Skills,
    Projects,
    EduExp,
    Articles,
    NotFound,
} from "./components";
import "./app.scss";

const App: FC = () => {
    /* ──────────────────────────────────────────────────── */
    /* ───────────────────────  THEME  ──────────────────── */

    const location = useLocation();
    // console.log(location.pathname);

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
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", setDimension);

        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [screenSize]);
    /* ──────────────── end  Window Size  ───────────────── */
    /* ──────────────────────────────────────────────────── */

    // console.log(screenSize.dynamicWidth);

    return (
        <div id="App">
            {/* ──────────  sidebar  ──────── */}
            {screenSize.dynamicWidth > 768 && (
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
                                <Home />
                                {screenSize.dynamicWidth < 768 && (
                                    <div id="sidebar">
                                        <Sidebar
                                            themeMode={themeMode}
                                            screenSize={screenSize.dynamicWidth}
                                        />
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
                        element={
                            <Projects
                                themeMode={themeMode}
                                screenSize={screenSize}
                            />
                        }
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
