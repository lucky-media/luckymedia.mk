const Heading = ({ title, color }) => {
    return (
        <div className="flex flex-col">
            <h5 className={`${color} text-base uppercase font-medium tracking-widest`}>{title}</h5>
            <div style={{ height: '2px' }} className="bg-blue-500 w-5 mt-3"></div>
        </div>
    );
};

export default Heading;
