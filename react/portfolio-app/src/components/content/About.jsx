import { Title, Description } from "../base/Title.jsx";
import { Majors, Major } from "./Majors.jsx"
import { Jobs, job } from "./Jobs.jsx";

export function About() {
    return (
        <section id="about" className="section container">
            <Title title="About me" />
            <Description />
            <Majors />
            <Jobs />
        </section>
    );
}