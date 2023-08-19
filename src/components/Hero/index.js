import Lottie from "lottie-react";
import animationData from "../../lotties/animation-home.json";


const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return(
        <section className={'h-[800px]'}>
            <div className={"container mx-auto flex justify-around h-full"}>
                <div className={'flex flex-col justify-center'}>
                    <div className={'font-semibold flex items-center uppercase'}>
                        <div className={'w-20 h-[2px] bg-yellow-400 mt-4 mr-3 mb-24'}>Welcome to Botanic & Boutique Bazaar</div>
                    </div>
                    <h1 className={'text-[70px] leading-[1.1] font-light mb-4 mt-12'}>
                        <span className={'font-semibold'}>HOME & GARDEN <br /></span>
                        <span className={'font-semibold'}>WOMEN & MEN'S FASHION <br /></span>
                        <span className={'font-semibold'}>JEWELRY</span>
                    </h1>
                    <a href={"#about"} className={'font-semibold w-16 h-[2px] bg-yellow-400 mr-4  mb-12'}>Discover more </a>
                </div>
                <div className="hidden lg:block relative bottom-0 left-0 w-full h-full opacity-90 mt-24">
                    <Lottie options={defaultOptions} height={400} width={400} animationData={animationData} />
                </div>
            </div>
        </section>

    )
}

export default Hero;