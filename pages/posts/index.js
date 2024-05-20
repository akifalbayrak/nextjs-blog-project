import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
        title: "Getting Started with Nextjs",
        image: "getting-started-nextjs.png",
        excerpt:
            "Next.js is a popular and lightweight framework for static and server-rendered applications built with React.",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
    },
    {
        title: "Getting Started with Nextjs2",
        image: "getting-started-nextjs.png",
        excerpt:
            "Next.js is a popular and lightweight framework for static and server-rendered applications built with React.",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
    },
    {
        title: "Getting Started with Nextjs3",
        image: "getting-started-nextjs.png",
        excerpt:
            "Next.js is a popular and lightweight framework for static and server-rendered applications built with React.",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
    },
    {
        title: "Getting Started with Nextjs4",
        image: "getting-started-nextjs.png",
        excerpt:
            "Next.js is a popular and lightweight framework for static and server-rendered applications built with React.",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
    },
];

export default function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />;
}
