import SVG from 'react-inlinesvg';
import Link from 'next/link';

function strippedString(text) {
    return truncate(text.replace(/(<([^>]+)>)/gi, ""), 200);
}

function truncate(str, n){
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return subString.substr(0, subString.lastIndexOf(" ")) + "...";
}

export default function Project({project, left}) {
    return (
        <div className="row items-center mt-20 lg:mt-5">
            {left && <div className={`lg:col-6 bg-skew xl:max-w-5xl xl:ml-auto`}>
                <img className="w-full h-auto object-cover" srcSet={project.cover_lg} src={project.cover} alt=""/>
            </div>}
            <div className={`mt-8 lg:mt-0 lg:col-6 ${left ? 'lg:-ml-8' : 'lg:-mr-8'}`}>
                <div
                    className={`flex flex-col justify-center items-start text-gray-200 lg:px-16 max-w-2xl ${left ? null : 'ml-auto'}`}>
                    <p className="text-blue-500 uppercase font-bold mb-2 text-sm tracking-widest">{project.client}</p>
                    <Link href={`/portfolio/${project.slug}`}>
                        <a className="text-3xl font-bold text-gray-500 hover:text-blue-500 transition duration-100 ease-in">
                            {project.title}
                        </a>
                    </Link>
                    <p className="font-medium mt-3">{strippedString(project.content)}</p>
                    <ul className="flex flex-col w-full mt-8 mb-10">
                        <li className="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                            <SVG src="../svg/window.svg" className="fill-current w-8 h-8 text-blue-500"/>
                            <a href={project.link} target="_blank"
                               className="text-sm hover:text-blue-500 ml-3">{project.link}</a>
                        </li>
                        <li className="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                            <SVG src="../svg/check.svg" className="fill-current w-8 h-8 text-blue-500 mr-3"/>
                            <p className="text-sm">{project.services}</p>
                        </li>
                        <li className="flex flex-row items-center py-4 px-1 lg:px-4 border-b border-gray-100">
                            <SVG src="../svg/check.svg" className="fill-current w-8 h-8 text-blue-500 mr-3"/>
                            {project.technologies.map(item => {
                                return (
                                    <p key={item} className="text-sm mr-1">{item}</p>
                                )
                            })}
                        </li>
                    </ul>
                    <Link href={`/portfolio/${project.slug}`} className="">
                        <a className="bg-blue-500 text-white px-8 py-2 uppercase">Read More</a>
                    </Link>
                </div>
            </div>
            {!left && <div className="order-first lg:order-none lg:col-6 xl:max-w-5xl xl:mr-auto bg-skew-180">
                <img className="w-full h-auto object-cover" srcSet={project.cover_lg} src={project.cover} alt=""/>
            </div>}
        </div>
    )
}
