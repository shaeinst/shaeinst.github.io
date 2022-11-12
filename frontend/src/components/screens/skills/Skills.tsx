import {
    BashIcon,
    DjangoIcon,
    GitIcon,
    LinuxIcon,
    LuaIcon,
    NeovimIcon,
    PythonIcon,
    ReactIcon,
    RustIcon,
    SassIcon,
    TailwindIcon,
    TypesciptIcon,

} from "../../../assets";
import "./skills.scss";

const SkillCard = (ICON: any, skillName: string, color?: string) => {
    return (
        <div className="skill__card">
            <div className="skill__item skill__icon">
                {<ICON style={{ fill: `${color}` }} />}
            </div>
            <div className="skill__item skill__name"> {skillName} </div>
        </div>
    );
};

const Skills = ({ themeMode }: any) => {
    const fillColor = themeMode === "night" ? "#ffffff" : "#010101";

    return (
        <div className="container__skill">
            <div className="skill">
                <div className="skill__title"> Programming Language </div>
                <div className="skill__list">
                    {SkillCard(PythonIcon, "python", fillColor)}
                    {SkillCard(TypesciptIcon, "typescipt", fillColor)}
                    {SkillCard(LuaIcon, "lua", fillColor)}
                    {SkillCard(RustIcon, "rust", fillColor)}
                </div>
            </div>
            <div className="skill">
                <div className="skill__title"> Tools </div>
                <div className="skill__list">
                    {SkillCard(LinuxIcon, "Linux", fillColor)}
                    {SkillCard(GitIcon, "git", fillColor)}
                    {SkillCard(BashIcon, "bash", fillColor)}
                    {SkillCard(NeovimIcon, "neovim", fillColor)}
                </div>
            </div>
            <div className="skill">
                <div className="skill__title"> Framework </div>
                <div className="skill__list">
                    {SkillCard(ReactIcon, "react", fillColor)}
                    {SkillCard(DjangoIcon, "django", fillColor)}
                    {SkillCard(SassIcon, "sass", fillColor)}
                </div>
            </div>
        </div>
    );
};

export default Skills;
