import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    const postSlug = fileName.replace(/\.md$/, "");

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}

export default function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);

    for (const postFile of postFiles) {
        const postData = getPostData(postFile);
    }

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
}
