import { CardProject } from "../../..";
import "./projects.scss";

const Projects = () => {
    return (
        <div className="container__projects">
            <div className="left">
                <CardProject
                    direction="left"
                    title="Abstract"
                    description="Abstract is an opensource project foucsed on developing plugins and configs for the IDEs (mainly NEOVIM)."
                    thumbnail="https://avatars.githubusercontent.com/u/107783343?s=200&v=4"
                    url="https://github.com/Abstract-IDE"
                />
            </div>
            <div className="right">
                <CardProject
                    direction="right"
                    title="LiveSportly"
                    description="Place where you can watch live sports for free"
                    thumbnail="https://raw.githubusercontent.com/shaeinst/media/main/images/github-repositories/logo.svg"
                    url="https://livesportly.com/"
                />
            </div>
            <div className="left">
                <CardProject
                    direction="left"
                    title="Entrance Question"
                    description="Free and open source project to help students prepare for their entrance exams"
                    thumbnail="https://avatars.githubusercontent.com/u/117027421"
                    url="https://github.com/EntranceQuestion"
                />
            </div>
        </div>
    );
};

export default Projects;
