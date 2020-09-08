export default function Copyright() {
    return (
        <div>
            <img src={"/images/footer_mnt.png"} srcSet={"/images/footer_mnt@2x.png"} className="w-full h-auto"
                 alt=""/>
            <div className="container lg:-mt-32 xl:-mt-40">
                <div className="row flex flex-col">
                    <div className="col-12">
                        <p className="font-medium text-lg text-black mb-32">
                            Borce Jovanoski nr.32,<br/>
                            Gostivar 1230, <br/>
                            North Macedonia
                        </p>
                        <div className="flex flex-col md:flex-row md:justify-between mb-12">
                            <p className="text-sm md:text-lg font-medium text-black order-2 md:order-none">© 2020
                                Lucky Media — All Rights Reserved</p>
                            <div className="flex flex-row mb-5 md:mb-0">
                                <a href="https://www.facebook.com/LuckyMediaInc/" target="_blank"
                                   className="text-lg text-black mr-10">Facebook</a>
                                <a href="https://www.instagram.com/luckymedia.dev/" target="_blank"
                                   className="text-lg text-black mr-10">Instagram</a>
                                <a href="https://twitter.com/LuckyMediaDev" target="_blank"
                                   className="text-lg text-black">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
