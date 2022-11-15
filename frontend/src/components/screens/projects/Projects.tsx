// import projectsImage from "../../../assets";
import "./projects.scss";

const Projects = ({ themeMode, screenSize }: any) => {
    const CardProject = (
        direction: string,
        title: string,
        description: string,
        thumbnail: any,
        url: string
    ) => {
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
            if (screenSize.dynamicWidth < 768) {
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

    return (
        <div className="container__projects">
            <div className="left">
                {CardProject(
                    "left",
                    "Abstract",
                    "Abstract is an opensource project foucsed on developing plugins and configs for the IDEs (mainly NEOVIM).",
                    "https://avatars.githubusercontent.com/u/107783343?s=200&v=4",
                    "https://github.com/Abstract-IDE"
                )}
            </div>
            <div className="right">
                {CardProject(
                    "right",
                    "Entrance Question",
                    "Free and open source project to help students prepare for their entrance exams",
                    "https://avatars.githubusercontent.com/u/117027421",
                    "https://github.com/EntranceQuestion"
                )}
            </div>
        </div>
    );
};

export default Projects;
