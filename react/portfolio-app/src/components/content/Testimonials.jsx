import { Title, SubTitle } from "../base/Title.jsx";
import { AvatarImage } from "../base/Avatar.jsx";

export function Testimonials({testimonials}) {
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial"/>
            <SubTitle title="See what they say about me" />
            <ul className="testimonials">
                {testimonials && testimonials.map((item, index) => 
                    <li className="testimonial" key={index}>
                        <AvatarImage img={item.img} msg={item.alt} style="testimonial-img" />
                        <div className="testimonial-text">
                            <p>{item.description}</p>
                            <p><a href="#" className="testimonial-text-name">{item.name}</a> / {item.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}