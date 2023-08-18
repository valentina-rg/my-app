import React, { useEffect, useState } from "react";
import apiRequest from "../../services/apiRequest";
import Modal from "../Modal";

function ProductModal({ open, toggleOpen, productId }) {
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        if (open && productId) {
            apiRequest.get(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${productId}.json`)
                .then((res) => {
                    console.log(res)
                    setProductDetails(res.data.product);
                })
                .catch((error) => {
                    console.error("Error fetching product details:", error);
                    setProductDetails(null);
                });
        }
    }, [open, productId]);

    console.log({productDetails})


    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    return (
        <Modal opened={open} onExit={toggleOpen} modalWidth={'ms'}>
            {productDetails ? (
                <div className="bg-white p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center">
                        <img
                            src={productDetails.image?.src}
                            alt={productDetails.title}
                            className="w-72 h-72 object-contain mb-4 md:mb-0 md:mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2">{productDetails.title}</h2>
                            <p className="text-gray-500">
                                {stripHtmlTags(productDetails.body_html)}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        {productDetails.variants?.map((variant) => (
                            <div key={variant.id} className="flex justify-between items-center border-b py-2">
                                <p>Prezzo: </p>
                                <p className="font-semibold">{variant.price} €</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </Modal>
    );
}

export default ProductModal;
