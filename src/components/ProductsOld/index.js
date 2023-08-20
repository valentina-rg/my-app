import React, {useState} from "react";
import Tabs from "../../ui-components/Tabs";
import HomeGarden from "../HomeGarden";
import Apparel from "../Apparel";
import Jewelry from "../Jewelry";

const ProductsOld = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section id={"products"}>
            <div className={"container"}>
                <div className="flex flex-col items-center mt-4 mb-8">
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
                    <div className="mt-4 mb-8">
                        {tabIndex === 0 && <HomeGarden/>}
                        {tabIndex === 1 && <Apparel/>}
                        {tabIndex === 2 && <Jewelry/>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsOld;
