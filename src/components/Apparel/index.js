import animationApparel from "../../lotties/animation_llcoalr4.json";
import ProductCollection from "../ProductCollection";


function Apparel() {

    return (
        <ProductCollection
            animationData={animationApparel}
            collectionId="https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329391177/products.json"
        />
    );

}

export default Apparel;