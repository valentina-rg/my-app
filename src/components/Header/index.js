import {useEffect, useRef} from "react";

const Header = () => {

    const headerRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if(
                document.body.scrollTop > 90 ||
                document.documentElement.scrollTop > 90
            ) {
                headerRef.current.classList.add("sticky-header");
            } else {
                headerRef.current.classList.remove("sticky-header")
            }
        })

    }

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener("scroll", stickyHeaderFunc)
    })

    return (
        <header ref={headerRef} className={"w-full h-[80px] leading-[80px] flex items-center bg-indigo-950"}>
            <div className={"container"}>
                <div className={"flex items-center justify-between"}>
                    {/*logo*/}
                    <div className={"flex items-center gap-[10px]"}>
                    <span className={"w-[45px] h-[45px] bg-yellow-300 text-black text-[18px] font-[500] " +
                        "rounded-full flex items-center justify-center"}>
                        B&B
                    </span>
                        <div className={"leading-[20px]"}>
                            <h2 className={"text-xl text-yellow-300 font-[700] mr-2"}>Your shop online</h2>
                            <p className={"text-smallTextColor text-[14px] font-[500]"}>personal
                            </p>
                        </div>
                    </div>
                    {/*end logo*/}
                    {/*menu start*/}
                    <div className={"menu"}>
                        <ul className={"flex items-center gap-10"}>
                            <li><a className={"text-yellow-300 text-[18px] font-[600]"} href={"#about"}>About</a></li>
                            <li><a className={"text-yellow-300 text-[18px] font-[600]"} href={"#products"}>Products</a></li>
                        </ul>
                    </div>
                    {/*menu end*/}
                </div>
            </div>
        </header>
    )
}

export default Header;