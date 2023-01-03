import { FC, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    NavbarPrimary,
    Sidebar,
    HomePage,
    Skills,
    Projects,
    EduExp,
    Articles,
    NotFound,
    RootState,
    updateDimension,
    NavbarSecondary,
} from "./door";
import "./app.scss";

const App: FC = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { themeMode } = useSelector((state: RootState) => state.theme);

    const styleSecNav = {
        backgroundColor: themeMode === "day" ? "#ffffff" : "#000000",
    };
    /* ──────────────────────────────────────────────────── */
    /* ──────────────────  Window Size  ─────────────────── */

    const { screenWidth } = useSelector((state: RootState) => state.dimension);

    useEffect(() => {
        const handleResize = () => {
            dispatch(
                updateDimension({
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight,
                })
            );
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    /* ──────────────── end  Window Size  ───────────────── */
    /* ──────────────────────────────────────────────────── */

    // console.log(screenSize.dynamicWidth);

    return (
        <div id="App">
            {/* ──────────  sidebar  ──────── */}
            {screenWidth > 768 && (
                <div id="sidebar">
                    <Sidebar />
                </div>
            )}

            {/* ───────────  navbar  ───────── */}
            <div id="navbar">
                <NavbarPrimary />
            </div>

            {/* ──────────  container  ─────── */}
            <div id="container">
                {
                    // don't show secondary navbar in article screen
                    pathname !== "/articles" && (
                        <div className="navbar__secondary" style={styleSecNav}>
                            <NavbarSecondary />
                        </div>
                    )
                }
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="home">
                                    <HomePage />
                                    {screenWidth < 768 && (
                                        <div id="sidebar">
                                            <Sidebar />
                                        </div>
                                    )}
                                </div>
                            }
                        />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/edu_exps" element={<EduExp />} />
                        <Route path="/articles" element={<Articles />} />

                        {/* if no url matchs (404 not found) */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
