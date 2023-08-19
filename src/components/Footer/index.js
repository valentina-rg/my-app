

const Footer = () => {

    return(
        <footer className={"bg-indigo-950"}>
            {/*footer top*/}
            <div className={"container"}>
                <div className={"sm:flex items-center justify-between md:gap-8"}>
                    <div className={"w-full sm:w-1/2"}>
                        <h2 className={"text-[26px] leading-10 text-yellow-300 font-[600] mb-5 md:text-[2rem] mt-2"}>
                            Questions?
                        </h2>
                        <a href={"#contact"}>
                            <button className={"mb-4 bg-yellow-100 text-black font-[500] flex items-center gap-2 hover:bg-yellow-400 ease-in duration-300 py-2 px-4 rounded-[8px]"}>
                                <i className={"ri-mail-line"}>Write us!</i>
                            </button>
                        </a>
                    </div>
                    <div className={"w-full sm:w-1/2"}>
                        <p className={"text-yellow-300 font-[600] text-[15px] leading-7 mt-4 sm:mt-0"}>
                            Your Style, Our Selection
                        </p>
                        <div className={" flex items-center gap-4 flex-wrap md:gap-8 mt-10"}>
                            <span className={"text-yellow-300 font-[600] text-[15px]"}>
                                Follow us:
                            </span>
                            <span>
                                <a href={"/"} className={"text-yellow-300 font-[500] text-[18px]"}>
                                    <i className={"ri-instagram-line"}></i>
                                </a>
                                <a href={"/"} className={"text-yellow-300 font-[500] text-[18px]"}>
                                    <i className={"ri-facebook-line"}></i>
                                </a>
                                <a href={"/"} className={"text-yellow-300 font-[500] text-[18px]"}>
                                    <i className={"ri-twitter-line"}></i>
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            {/*footer top end*/}
        </footer>
    )

}

export default Footer;