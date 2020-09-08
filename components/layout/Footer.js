export default function Footer() {
    return (
        <div className="bg-black py-32 md:py-40 relative">
            <div className="container">
                <div className="row relative">
                    <div className="md:col-7 flex flex-col">
                        <h1 className="text-3xl md:text-5xl text-white font-bold">Let’s work together</h1>
                        <p className="font-medium text-base text-white mt-3">
                            We're passionate about providing
                            innovative, bright ideas and execute them into a wonderful experience.
                        </p>
                        <a href="/contact"
                           className="w-40 py-3 border border-white text-center text-white uppercase mt-10 hover:bg-white hover:text-black animate">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
            <img style={{ height: '500px' }}
                 className="hidden md:block absolute right-0 top-0 object-cover"
                 src={"/images/black_mnt.png"}
                 srcSet={"/images/black_mnt@2x.png"} alt="Black Mountain"
            />
        </div>

)
}
