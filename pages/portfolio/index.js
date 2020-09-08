import Layout from "../../components/layout/Layout";
import HeadingGray from "../../components/HeadingGray";
import { allProjects } from "../../content/getContent";
import Project from "../../components/Project";

export default function PortfolioIndex({ projects }) {
    return (
        <Layout background="bg-gray-50">
            <HeadingGray title="Portfolio"/>

            <div className="container-fluid mt-24 lg:mt-32 mb-48">

                {projects.map((item, index) => {
                    if (index % 2 === 0) {
                        return <Project key={item.slug} project={item} left />;
                    } else {
                        return <Project key={item.slug} project={item} />;
                    }
                })}

                <div className="row mt-32">
                    <div className="col-12 flex justify-center">

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const projects = allProjects();

    return {
        props: {
            projects,
        },
    };
}
