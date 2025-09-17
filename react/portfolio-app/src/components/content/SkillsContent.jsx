import { Article, CodingSkills, SkillTitle } from "./Article.jsx";
import { List } from "../base/List.jsx";

export function SkillsContent({data}) {
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillTitle title="Coding Skills" />
                <CodingSkills skills={data.coding}/>
            </Article>
            <Article style="skills-tools">
                <SkillTitle title="Tools" />
                <List titles={data.tools}/>
            </Article>
            <Article style="skills-etc">
                <SkillTitle title="Etc" />
                <List titles={data.etc}/>
            </Article>
        </div>
    );
}