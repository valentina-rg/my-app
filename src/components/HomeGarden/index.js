import animationGarden from "../../lotties/animation_llb5i84t.json";
import ProductCollection from "../ProductCollection";



function HomeGarden() {

    return (
        <ProductCollection
            animationData={animationGarden}
            collectionId="https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329686089/products.json"
        />
    );
}

export default HomeGarden;
