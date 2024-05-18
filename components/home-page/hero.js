import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/hazard.jpg"
                    alt="An image showing myself"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Akif</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like Vue or React
            </p>
        </section>
    );
}
