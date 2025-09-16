import { AvatarImage } from "../base/Avatar";

export function Home({data}) {
    const {img, name, title, description} = data;
    return (
        <section id="home">
            <AvatarImage img={img}
                        msg="home photo"
                        style="home-avatar"/>
            {/* <img src="images/favicon.ico" alt="photo" className="home-avatar" /> */}
            <h2 className="home-title">Hello<br />
                I'm <strong className="home-title strong">{title}</strong>, {name}
            </h2>
            <p className="home-description">{description}</p>
            <a className="home-contact" href="#">contact</a>
        </section>
    );
}