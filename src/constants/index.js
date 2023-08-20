export const stripHtmlTags = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
};

export const findLowestPrice = (productDetails) => {
    if (!productDetails.variants) return null;

    let lowestPrice = null;

    productDetails.variants.forEach((variant) => {
        const price = parseFloat(variant.price);
        if (lowestPrice === null || price < lowestPrice) {
            lowestPrice = price;
        }
    });

    return lowestPrice;
};

export const findHighestPrice = (productDetails) => {
    if (!productDetails.variants) return null;

    let highestPrice = null;

    productDetails.variants.forEach((variant) => {
        const price = parseFloat(variant.price);
        if (highestPrice === null || price > highestPrice) {
            highestPrice = price;
        }
    });

    return highestPrice;
};

export const hasDifferentPrices = (productDetails) => {
    if (!productDetails.variants) return false;

    const uniquePrices = new Set();

    productDetails.variants.forEach((variant) => {
        const price = parseFloat(variant.price);
        uniquePrices.add(price);
    });

    return uniquePrices.size > 1;
};
