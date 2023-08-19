import ShoppingBag from "../../img/shopping-bag.png"

const About = () => {
    return (
        <section id={"about"}>
            <div className={"container lg:pt-5"}>
                <div className={"text-center"}>
                    <h2 className={"text-headingColor font-[800] text-[2.4rem] mb-5"}>
                        What we can do for you
                    </h2>
                    <p className={"flex items-center justify-center lg:max-w-[600px] lg-mx-auto text-headingColor font-[600] text-[20px] leading-7"}>
                        Elevate your shopping journey with our handpicked selection
                    </p>
                </div>


                <div className={"flex flex-col justify-center sm:py-12"}>
                    <div className={"w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0"}>
                        <div className={"relative text-gray-700 antialiased text-sm text-semibold"}>
                            {/*vertical line*/}
                            <div
                                className={"hidden absolute w-1 sm:block bg-indigo-900 h-full left-1/2 transform -translate-x-1/2"}>

                            </div>
                            {/*left card*/}
                            <div className={"mt-6 sm:mt-0 sm:mb-12"}>
                                <div className={"flex items-center flex-col sm:flex-row"}>

                                    <div className={"flex justify-start w-full mx-auto items-center"}>
                                        <div className={"w-full sm:w-1/2 sm:pr-8"}>
                                            <div data-aos={"fade-right"} data-aos-duration={'1200'}
                                                 className={"bg-white p-4 rounded shadow group hover:bg-yellow-50 cursor-pointer ease-in duration-150"}>
                                                <h3 className={"text-black font-[700] mb-3 group-hover:text-black group-hover:font-[600] text-2xl"}>Our
                                                    Mission</h3>
                                                <p className={"text-[15px] text-black group-hover:text-black group-hover:font-[500] leading-7"}>At
                                                    Botanic & Boutique Bazaar, our mission is clear:
                                                    to bring the world of home furniture and fashion right to your
                                                    doorstep. We believe that our products should be accessible,
                                                    convenient, and exciting for everyone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={"rounded-full bg-indigo-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center"}>
                                        <figure>
                                            <img src={ShoppingBag} alt={"heart"}/>
                                        </figure>
                                    </div>


                                </div>
                            </div>

                            {/*right card*/}
                            <div className={"mt-6 sm:mt-0 sm:mb-12"}>
                                <div className={"flex items-center flex-col sm:flex-row"}>

                                    <div className={"flex justify-end w-full mx-auto items-center"}>
                                        <div className={"w-full sm:w-1/2 sm:pl-8"}>
                                            <div data-aos={"fade-right"} data-aos-duration={'1200'}
                                                 className={"bg-white p-4 rounded shadow group hover:bg-yellow-50 cursor-pointer ease-in duration-150"}>
                                                <h3 className={"text-black font-[700] mb-3 group-hover:text-black group-hover:font-[600] text-2xl"}>Who
                                                    we are</h3>
                                                <p className={"text-[15px] text-black group-hover:text-black group-hover:font-[500] leading-7"}>We
                                                    are a team of passionate artists
                                                    enthusiasts, driven by our love for home furniture and fashion. Our
                                                    diverse backgrounds and expertise come together to curate a
                                                    collection
                                                    that reflects our dedication to excellence.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={"rounded-full bg-indigo-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center"}>
                                        <figure>
                                            <img src={ShoppingBag} alt={"heart"}/>
                                        </figure>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;