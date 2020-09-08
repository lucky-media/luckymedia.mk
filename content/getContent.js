import matter from "gray-matter";
import fs from "fs";

export function parseFiles(folder) {
    const files = fs.readdirSync(`${process.cwd()}/content/${folder}`);

    return files.map((filename) => {
        const markdownWithMetadata = fs.readFileSync(`content/${folder}/${filename}`).toString();

        const {data, content} = matter(markdownWithMetadata);

        return {
            slug: filename.replace(".md", ""),
            ...data,
            content
        };
    });
}

export function allProjects() {

    const files = fs.readdirSync(`${process.cwd()}/content/portfolio`);

    let projects = files.map(filename => {
        const markdownWithMetadata = fs.readFileSync(`content/portfolio/${filename}`).toString();

        let { data, content } = matter(markdownWithMetadata);

        return {
            slug: filename.replace(".md", ""),
            ...data,
            content
        }
    });

    projects.sort((a, b) => b.date - a.date);

    projects = Array.from(projects).map(item => {
        return {
            ...item,
            date: item.date.toLocaleDateString(),
        }
    });

    return projects;
}

export function latestProject() {
    const files = fs.readdirSync(`${process.cwd()}/content/portfolio`);

    let projects = files.map(filename => {
        const markdownWithMetadata = fs.readFileSync(`content/portfolio/${filename}`).toString();

        let { data } = matter(markdownWithMetadata);

        const { date, title, client, tags, cover, cover_lg } = data;

        return {
            slug: filename.replace(".md", ""),
            date,
            title,
            client,
            tags,
            cover,
            cover_lg
        }
    });

    projects.sort((a, b) => b.date - a.date);

    projects = Array.from(projects).map(item => {
        return {
            slug: item.slug,
            title: item.title,
            client: item.client,
            tags: item.tags,
            cover: item.cover,
            cover_lg: item.cover_lg
        }
    });

    return projects[0];
}
