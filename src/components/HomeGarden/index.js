import React, {useEffect, useState} from "react";
import Lottie from "lottie-react";
import animationGarden from "../../lotties/animation_llb5i84t.json";
import apiRequest from "../../services/apiRequest";
import ProductModal from "../Modals/ProductModal";
import SearchSelect from "../../ui-components/SearchSelect";
import ButtonNavigation from "../../ui-components/ButtonNavigation";
import ProductCards from "../ProductCards";



function HomeGarden() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationGarden,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const [detailCollection, setDetailCollection] = useState([]);
    const [showCards, setShowCards] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const [selectedProductId, setSelectedProductId] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const [showAnimation, setShowAnimation] = useState(true);

    const [sortByAlphabetical, setSortByAlphabetical] = useState(false);



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        apiRequest.get(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329686089/products.json`)
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
                }, 3000);
            });
    }, [sortByAlphabetical]);

    console.log({detailCollection})

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
                {showAnimation && <Lottie options={defaultOptions}
                         height={400} width={400}
                         animationData={animationGarden}
                         className="animation"
                />}
                {showCards && (
                    <ProductCards items={currentItems} setSelectedProductId={setSelectedProductId} setOpenDetail={setOpenDetail}/>
                )}
            </div>
            <div className="flex justify-center mt-4 z-40 gap-4">
                <ButtonNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
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

export default HomeGarden;
