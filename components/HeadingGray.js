export default function HeadingGray({ client, title }) {
    return (
        <div className="bg-gray-50">
            <div className="container py-5 md:py-12">
                <div className="row my-auto items-center">
                    <div className="col-12 flex flex-col items-start">
                        {client &&   <p className="text-blue-500 uppercase -mb-1 text-sm md:text-base font-bold tracking-widest">{client}</p>}
                        <h2 className="text-2xl md:text-5xl font-bold text-gray-500">{title}</h2>
                        <span className="bg-blue-500 w-10 h-1 mt-4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
