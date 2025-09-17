import { Title, SubTitle, Description } from "../base/Title.jsx";
import { SkillsContent } from "./SkillsContent.jsx";

export function Skills({data}) {    
    return (
        <section id="skill" className="section container">
            <Title title="My Skills" />
            <SubTitle title="Skills & Attributes"/>
            <Description />
            <SkillsContent data={data}/>
        </section>
    );
}