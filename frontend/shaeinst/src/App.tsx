import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

const App: FC = () => {
    const dispatch = useDispatch();

    /* ──────────────────────────────────────────────────── */
    /* ──────────────────  Window Size  ─────────────────── */

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
                    <Sidebar />
                </div>
            )}

            {/* ───────────  navbar  ───────── */}
            <div id="navbar">
                <Navbar />
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
    );
};

export default App;
