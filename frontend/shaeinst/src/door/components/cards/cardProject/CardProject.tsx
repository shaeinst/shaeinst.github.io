import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import "./stylesCardproject.scss";

interface CardProjectInterface {
    direction: string;
    title: string;
    description: string;
    thumbnail: any;
    url: string;
}

const CardProject: FC<CardProjectInterface> = (props) => {
    const { direction, title, description, thumbnail, url } = props;

    const { themeMode } = useSelector((state: RootState) => state.theme);
    const { screenWidth } = useSelector((state: RootState) => state.dimension);

    let style_card__thumbnail: any = {
        backgroundImage: `url(${thumbnail}) `,
        backgroundColor: themeMode === "day" ? "#ffffff" : "#010101",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "55%",
    };

    const style_project = {
        backgroundColor: themeMode === "day" ? "#ffffff" : "#010101",
    };
    let style_card__project = {};
    if (direction === "right") {
        if (screenWidth < 768) {
            style_card__project = {
                paddingLeft: "4.2rem",
                paddingRight: "1rem",
            };

            style_card__thumbnail = {
                ...style_card__thumbnail,
                left: "-70px",
            };
        } else {
            style_card__project = {
                paddingLeft: "5.5rem",
                paddingRight: "1rem",
            };
            style_card__thumbnail = {
                ...style_card__thumbnail,
                left: "-85px",
            };
        }
    }

    return (
        <div className="card__project" style={style_card__project}>
            <div className="title"> {title} </div>
            <div className="description"> {description} </div>
            <div className="card__thumbnail" style={style_card__thumbnail}>
                <div className="view__project" style={style_project}>
                    <a
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
