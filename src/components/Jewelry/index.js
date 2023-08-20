import animationJewelry from "../../lotties/animation_llb24y4a.json";
import ProductCollection from "../ProductCollection";

function Jewelry() {
    return (
        <ProductCollection
            animationData={animationJewelry}
            collectionId="https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329161801/products.json"
        />
    );
}

export default Jewelry;

