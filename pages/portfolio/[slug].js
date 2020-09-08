import fs from "fs";
import path from "path";
import matter from "gray-matter";
import HeadingGray from "../../components/HeadingGray";
import Layout from "../../components/layout/Layout";

export default function Portfolio({content, data}) {
    return (
        <Layout background="bg-gray-50">
            <HeadingGray client={data.client} title={data.title} />
            <div className="container my-16 lg:my-24">
                <div className="row">
                    <div className="lg:col-8">
                        <img className="w-full h-auto mb-5" src={data.cover} srcSet={data.cover_lg} alt="Cover Image"/>
                    </div>
                    <div className="lg:col-4 mb-16 lg:mb-0">
                        <div className="flex flex-col">
                            <h4 className="text-xl lg:text-2xl font-bold">Description</h4>
                            <div className="mt-3 font-medium text-gray-200">
                                {content}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-xl lg:text-2xl font-bold">Technologies used</h4>
                            <div className="mt-3 flex flex-row">
                                {data.technologies.map(item => {
                                        return (
                                            <p key={item} className="font-medium text-gray-200 mr-1">{item}</p>
                                        )
                                    }
                                )}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-xl lg:text-2xl font-bold">Date</h4>
                            <div className="mt-3 flex flex-row">
                                <p className="font-medium text-gray-200 mr-4">{data.date}</p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-xl lg:text-2xl font-bold">Link</h4>
                            <div className="mt-3 flex flex-row">
                                <a className="font-medium text-gray-200 hover:text-blue-500 mr-4"
                                   href={data.link}>
                                    {data.link}
                                </a>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-xl lg:text-2xl font-bold">Tags</h4>
                            <div className="mt-3 flex flex-row flex-wrap">
                                {data.tags.map(tag => {
                                    return (
                                        <div key={tag}
                                             className="bg-blue-400 px-2 py-1 text-blue-500 uppercase rounded mr-2 last:mr-0 mb-2">
                                            {tag}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-8">
                        {data.images.map(image => {
                            return (
                                <img key={image} className="w-full h-auto" src={image} alt=""/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("content/portfolio");

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMetadata = fs
        .readFileSync(path.join("content/portfolio", slug + ".md"))
        .toString();

    let {data, content} = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = {year: "numeric", month: "long", day: "numeric"};
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    data = {
        ...data,
        date: formattedDate,
    };


    return {
        props: {
            data,
            content
        },
    };
}

