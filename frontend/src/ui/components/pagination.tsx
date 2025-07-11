import { useEffect, useState } from "react";

import { ArrowdownIcon } from "$exporter/asset";

export default function Pagination() {
    const [active, setActive] = useState("top-screen");

    useEffect(() => {
        setActive("top-section");
    }, []);

    const scrollTo = (
        id: "top-section" | "middle-section" | "bottom-section",
    ) => {
        setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="pagination-container">
            <div
                className={`pagination-dot ${active === "top-section" ? "active" : ""}`}
                onClick={() => scrollTo("top-section")}
            ></div>
            <div
                className={`pagination-dot ${active === "middle-section" ? "active" : ""}`}
                onClick={() => scrollTo("middle-section")}
            ></div>
            <div
                className={`pagination-dot ${active === "bottom-section" ? "active" : ""}`}
                onClick={() => scrollTo("bottom-section")}
            ></div>
            <img
                src={ArrowdownIcon}
                alt="arrow_down_icon"
                onClick={() => scrollTo("bottom-section")}
            />
        </div>
    );
}
