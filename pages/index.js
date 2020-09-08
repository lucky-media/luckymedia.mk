import SwiperCore, {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import Card from "../components/Card";
import SVG from 'react-inlinesvg';
import {home} from '../content/site';
import Testimonial from "../components/Testimonial";
import HeadingVertical from "../components/HeadingVertical";
import {latestProject, parseFiles} from "../content/getContent";

SwiperCore.use(Autoplay);

export default function Home({testimonials, project}) {
    return (
        <Layout>
            <div className="container mt-24 mb-32">
                <div className="row items-center">
                    <div className="lg:col-5">
                        <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                            Passion,<br/>Commitment, <br/> and Coffee.
                        </h1>
                        <span style={{borderBottomWidth: '6px'}}
                              className="text-xl xl:text-2xl font-bold pb-1 border-blue-500">A lot of Coffee!</span>
                    </div>
                    <div className="hidden lg:block lg:col-6 lg:offset-1 relative">
                        <img className="w-4/5" src="/images/phone.png" alt="phone"/>
                        <img style={{marginTop: '-400px', marginLeft: '200px', zIndex: '-1'}}
                             className="absolute hidden xl:block"
                             src="/images/triangle.png" alt="triangle"/>
                    </div>
                </div>
            </div>

            <img className="w-full h-auto" src="/images/mountain_hero.png" alt="Mountain hero"/>

            <div id="about" style={{scrollMarginTop: '3rem'}} className="bg-black">
                <div className="container py-16">
                    <div className="row justify-center">
                        <SVG src="../svg/rectangle.svg" className="block fill-current w-12 h-12 text-black"/>
                    </div>
                    <div className="row mt-24">
                        <div className="lg:col-2">
                            <Heading color="text-white" title="About us"/>
                        </div>
                    </div>
                    <div className="row mt-12 mb-56">
                        <div className="lg:col-5 mb-5 lg:mb-0">
                            <h2 className="text-2xl md:text-4xl text-left text-white font-bold">
                                The art of beautiful design and professional digital experience.
                            </h2>
                        </div>
                        <div className="lg:col-6 lg:offset-1">
                            <p className="font-medium text-white text-left leading-relaxed">
                                We can help you out with all your online digital strategies and business needs. Starting
                                from your company website,
                                custom development solutions, corporate identity, social media marketing and more. We
                                can be the
                                invisible hand that pushes your company forward and ahead of your competitors. Online
                                presence
                                is very important in the current business ecosystem and the always changing
                                technologies.
                                While you worry about your core business, enhancing your products and services, we make
                                sure that you have
                                the best practices and most advanced technological setup.
                                <br/> <br/>
                                We can design a unique website for your company that will reflect elegance,
                                professionalism, trust and efficiency.
                                Our designers can provide you a complete corporate identity for your entire
                                marketing needs, refreshing
                                your influence and attracting possible clients. The presence on social media
                                networks is not just having company
                                profiles that have a few posts now and then. Our marketing team can utilize the best
                                state-of-the-art
                                techniques for increasing your social media presence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <img className="w-full h-auto -mt-5 transform rotate-180"
                 src="/images/mountain_hero.png" alt="Mountain Hero"/>

            <div className="container -mt-24">
                <div className="row justify-center">
                    <SVG src="../svg/rectangle.svg" className="block fill-current w-12 h-12 text-black"/>
                </div>
            </div>

            <div id="services" style={{scrollMarginTop: '7rem'}} className="container mt-32">
                <div className="row">
                    <div className="lg:col-2">
                        <Heading color="text-black" title="What we do"/>
                    </div>
                </div>
                <div className="row mt-20 mb-40">
                    {home.services.map(item => {
                        return (
                            <div key={item.icon} className="md:col-6 lg:col-4 mb-8">
                                <Card icon={item.icon} title={item.title} desc={item.desc}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Featured Work Section */}
            <div className="bg-gray-50">
                <div className="container pb-40">
                    <HeadingVertical title="Featured Work"/>

                    <div className="row justify-center relative mt-10">
                        <div className="lg:col-8">
                            <img className="w-full h-auto" alt="project" srcSet={project.cover_lg} src={project.cover}/>
                        </div>
                    </div>
                    <div className="row justify-center mt-10">
                        <div className="lg:col-8">
                            <div className="flex flex-col justify-center items-center mx-auto">
                                <p className="text-blue-500 uppercase font-bold mb-1 text-xs tracking-widest">{project.client}</p>
                                <h2 className="text-3xl font-bold">{project.title}</h2>
                                <div className="flex flex-row flex-wrap justify-center mb-16">
                                    {project.tags.map(item => {
                                        return (
                                            <div key={item}
                                                className="bg-blue-400 px-2 py-1 text-blue-500 uppercase rounded mt-4 mr-2 last:mr-0">
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                                <Link href={`/portfolio/${project.slug}`}>
                                    <a className="bg-blue-500 text-white px-8 py-2 uppercase">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="container pb-24 lg:pb-56">
                <HeadingVertical title="Testimonials"/>

                <div className="mt-20 lg:mt-32">
                    <div className="testimonials">
                        <Swiper spaceBetween={32}
                                slidesPerView={3}
                                autoplay={{delay: 4000}}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    766: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    }
                                }}
                                loop>
                            {testimonials.map(item => {
                                return (
                                    <SwiperSlide key={item.slug}>
                                        <Testimonial testimonial={item}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Technologies Section */}
            <div className="bg-gray-50 py-16">
                <div className="container">
                    <div className="row">
                        <div className="lg:col-2">
                            <Heading color="text-black" title="Technologies"/>
                        </div>
                    </div>
                    <div className="row items-center flex-col lg:flex-row lg:flex-wrap mt-20 lg:mt-24">
                        {home.technologies.map(item => {
                            return (
                                <a key={item.name} className="mb-16 last:mb-0 lg:mb-0 lg:mr-12 last:mr-0"
                                   href={item.link}>
                                    <img src={item.img} srcSet={item.img_large}
                                         className="w-auto h-20 lg:h-12 xl:h-16 opacity-50"
                                         alt={item.name}/>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export async function getStaticProps() {
    const testimonials = parseFiles('testimonials');
    const project = latestProject();

    return {
        props: {
            testimonials,
            project
        },
    };
}
