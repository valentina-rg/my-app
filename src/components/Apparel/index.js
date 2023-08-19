import React, {useEffect, useState} from "react"
import Lottie from "lottie-react";
import animationApparel from "../../lotties/animation_llcoalr4.json";
import apiRequest from "../../services/apiRequest";
import ProductModal from "../../components/Modals/ProductModal";
import SearchSelect from "../../ui-components/SearchSelect";
import ProductCards from "../ProductCards";

function Apparel() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationApparel,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const [detailCollection, setDetailCollection] = useState([]);
    const [showCards, setShowCards] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProductId, setSelectedProductId] = useState([]);

    const [selectedTags, setSelectedTags] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const [showAnimation, setShowAnimation] = useState(true);

    const [sortByAlphabetical, setSortByAlphabetical] = useState(false);



    const itemsPerPage = 5;




    useEffect(() => {
        apiRequest.get(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329391177/products.json`)
            .then((res) => {
                setDetailCollection(res);

                const availableTags = new Set();
                res.data.products.forEach((item) => {
                    // Convert item.tags to an array if it's not already
                    const tagsArray = Array.isArray(item.tags) ? item.tags : [item.tags];

                    tagsArray.forEach((tag) => {
                        availableTags.add(tag);
                    });
                });

                setTagsOptions(Array.from(availableTags).map((tag) => ({
                    value: tag,
                    label: tag,
                })));


                let sortedProducts = res.data.products || [];
                if (sortByAlphabetical) {
                    sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
                }

                setFilteredItems(sortedProducts);

                // Mostra le cards dopo 3 secondi
                setTimeout(() => {
                    setShowCards(true);
                    setShowAnimation(false); // Hide the animation
                }, 10);
            });
    }, [sortByAlphabetical]);


    useEffect(() => {
        const formattedSelectedTags = selectedTags?.map(tag => tag.value.replace(/\s/g, '').toLowerCase());

        const allItems = detailCollection?.data?.products || [];

        let newFilteredItems = allItems;

        // Filtra solo se ci sono tag selezionati
        if (formattedSelectedTags.length > 0) {
            newFilteredItems = allItems.filter((item) => {
                const itemTagsArray = Array.isArray(item.tags) ? item.tags : [item.tags];
                const formattedItemTags = itemTagsArray.map(tag => tag.replace(/\s/g, '').toLowerCase());

                return formattedSelectedTags.some(selectedTag => formattedItemTags.includes(selectedTag));
            });
        }

        setFilteredItems(newFilteredItems);
        setCurrentPage(1); // Reset current page to 1 when filters change
    }, [selectedTags, detailCollection]);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((filteredItems.length || 0) / itemsPerPage);



    return (
        <div className={"container"}>
            <div className="mr-8 flex justify-center items-center z-0 flex-col opacity-90">
                <div className="flex justify-center gap-2 z-40 w-96 mt-12">
                    <SearchSelect
                        options={tagsOptions}
                        value={selectedTags}
                        onChange={setSelectedTags}
                        isMulti
                        label={"Select product by tag"}
                    />
                    <SearchSelect
                        options={[
                            { value: "default", label: "Default" },
                            { value: "alphabetical", label: "Sort Alphabetically" },
                        ]}
                        value={sortByAlphabetical ? { value: "alphabetical", label: "Sort Alphabetically" } : { value: "default", label: "Default" }}
                        onChange={(selectedOption) => {
                            setSortByAlphabetical(selectedOption.value === "alphabetical");
                        }}
                        label={"Order by"}
                    />
                </div>
                {showAnimation && (
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                        animationData={animationApparel}
                        className="animation"
                    />
                )}
                {showCards && (
                    <ProductCards items={currentItems} setSelectedProductId={setSelectedProductId} setOpenDetail={setOpenDetail}/>
                )}
                <div className="flex justify-center mt-4 z-40 gap-4">
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                        disabled={currentPage === 1}
                        className={"mb-4  mt-2 bg-indigo-300 text-black font-[600] flex items-center gap-2 hover:bg-yellow-400 ease-in duration-300 py-2 px-4 rounded-[8px]"}>
                        Previous
                    </button>
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                        disabled={currentPage === totalPages}
                        className={"mb-4 mt-2 bg-indigo-300 text-black font-[600] flex items-center gap-2 hover:bg-yellow-400 ease-in duration-300 py-2 px-4 rounded-[8px]"}>
                        Next
                    </button>
                </div>
            </div>
            <ProductModal
                open={openDetail}
                toggleOpen={() => {
                    setOpenDetail(false);
                }}
                productId={selectedProductId} // Pass the selected product ID
            />
        </div>
    );

}

export default Apparel;