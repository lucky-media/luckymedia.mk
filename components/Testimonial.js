import SVG from "react-inlinesvg";

export default function Testimonial({ testimonial }) {
    return (
        <div>
            <div className="bg-white border border-gray-100 h-64 md:h-56 shadow-xl p-5 relative">
                <SVG src="../svg/quote.svg"
                     className="fill-current text-blue-500 w-20 h-20 opacity-50 absolute right-0 bottom-0"/>

                <div className="font-medium text-gray-200" dangerouslySetInnerHTML={{ __html: testimonial.content }}>
                </div>
            </div>
            <div className="flex flex-row items-center mt-8">
                <div className="w-16 h-16">
                    <img className="w-full h-auto object-cover rounded-full" src={testimonial.img} alt="Testimonial Image"/>
                </div>
                <div className="flex flex-col ml-5">
                    <h5 className="text-blue-500 font-bold uppercase">{testimonial.author}</h5>
                    <a target="_blank" href={testimonial.link}
                       className="font-medium text-gray-200 uppercase text-xs pb-1 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500">
                        {testimonial.position}
                    </a>
                </div>
            </div>
        </div>
    )
}
