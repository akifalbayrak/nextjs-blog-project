import classes from "./featured-posts.module.css";
export default function FeaturedPosts() {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <ul>
                <li>
                    <a>
                        <h3>Title</h3>
                        <p>Excerpt</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}
