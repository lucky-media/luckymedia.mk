import SVG from "react-inlinesvg";

function HeadingVertical ({ title }) {
    return (
        <div className="row justify-center">
            <div className="flex flex-col items-center">
                <div style={{width: '2px'}} className="h-24 bg-blue-500 -mt-12">
                </div>
                <SVG src="../svg/rectangle.svg" className="block fill-current w-12 h-12 text-black mt-12"/>
                <h5 className="text-base text-black uppercase font-medium tracking-widest mt-12">{title}</h5>
            </div>
        </div>
    )
}

export default HeadingVertical;
