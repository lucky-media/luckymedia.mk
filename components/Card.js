import SVG from "react-inlinesvg";

const Card = ({ icon, title, desc }) => {
    return (
        <div style={{height: '366px'}}
             className="bg-white w-full flex flex-col items-center shadow-lg p-12 group hover:bg-blue-500 transition-all ease-in-out duration-500">
            <SVG src={`../svg/${icon}.svg`} className="fill-current w-32 h-32 text-blue-500 group-hover:text-white"/>
            <h3 className="text-black text-center text-xl font-bold my-3 group-hover:text-white">{title}</h3>
            <span style={{height: '2px'}} className="w-16 bg-blue-500 mb-3 group-hover:bg-white"></span>
            <p className="text-base text-gray-200 font-medium text-center group-hover:text-white">
                {desc}
            </p>
        </div>
    );
};

export default Card;
