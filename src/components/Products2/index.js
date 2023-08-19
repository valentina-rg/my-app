import Tabs from "../../ui-components/Tabs";
import React, {useState} from "react";
import HomeGarden from "../HomeGarden";
import Apparel from "../Apparel";
import Jewelry from "../Jewelry";


const Products2 = () => {

    const [tabIndex, setTabIndex] = useState(0);


    return(
        <section id={"products"}>
            <div className={"container"}>
                <div className={"flex items-center justify-between flex-wrap"}>
                    <div className={"mb-2 sm:mb-0"}>
                        <h3 className={"text-smallTextColor font-[800] text-[2.4rem]"}>Our products: </h3>
                    </div>
                    <div className={"flex gap-3"}>
                        <Tabs
                            setActiveTab={setTabIndex}
                            active={tabIndex}
                            tabs={[
                                {
                                    name: "Home & Garden",
                                },
                                {
                                    name: "Apparel"
                                },
                                {
                                    name: "Jewelry",
                                },
                            ]}
                        />
                    </div>
                </div>


                <div className={"flex items-center gap-4 flex-wrap"}>
                    {tabIndex === 0 && <HomeGarden/>}
                    {tabIndex === 1 && <Apparel/>}
                    {tabIndex === 2 && <Jewelry/>}
                </div>
            </div>
        </section>
    )
}

export default Products2;