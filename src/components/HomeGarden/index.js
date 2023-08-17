import React, {useEffect, useState} from "react";
import Lottie from "lottie-react";
import animationGarden from "../../lotties/animation_llb5i84t.json";
import apiRequest from "../../services/apiRequest";
import ProductModal from "../../ui-components/Modals/ProductModal";
import Select from "react-select";
import SearchSelect from "../../ui-components/SearchSelect";



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







    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;


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

                // Mostra le cards dopo 3 secondi
                setTimeout(() => {
                    setShowCards(true);
                }, 3000);
            });
    }, []);

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
                <div className="flex justify-center gap-2 z-40 w-96">
                    <SearchSelect
                        options={tagsOptions}
                        value={selectedTags}
                        onChange={setSelectedTags}
                        placeholder="Select tags..."
                        isMulti  // Add this if you want to select multiple tags
                    />
                    <SearchSelect
                        options={tagsOptions}
                        value={selectedTags}
                        onChange={setSelectedTags}
                        placeholder="Select tags..."
                        isMulti  // Add this if you want to select multiple tags
                    />
                </div>
                <Lottie options={defaultOptions}
                        height={400} width={400}
                        animationData={animationGarden}
                        className="animation"
                />
                {showCards && (
                    <>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 cards">
                            {currentItems && currentItems?.map((item) => (
                                <div key={item.name}
                                     className="  overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <img src={item.image?.src} alt={item.title} className="w-full h-48 object-cover"/>
                                    <dt className="truncate text-sm font-medium text-gray-500">{item.tags}</dt>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.title}</dd>
                                    <button
                                        onClick={() => {
                                            setSelectedProductId(item.id); // Assuming the product ID is available as item.id
                                            setOpenDetail(true);
                                        }}className="mt-2 font-mono border-b border-indigo-300 bg-gradient-to-l from-neutral-50 to-indigo-200 lg:w-full lg:rounded-xl lg:border lg:bg-indigo-300 lg:p-4 lg:dark:bg-zinc-800/30 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
                                    >Vedi il prodotto</button>
                                </div>
                            ))}

                        </dl>
                    </>
                )}
                <div className="flex justify-center mt-40 z-40">
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                        disabled={currentPage === 1}
                        className="mr-2 font-mono border-b border-indigo-300 bg-gradient-to-l from-neutral-50 to-indigo-200' +
                        'lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-indigo-300 lg:p-4 lg:dark:bg-zinc-800/30' +
                    'backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                        Previous
                    </button>
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                        disabled={currentPage === totalPages}
                        className="mr-2 font-mono border-b border-indigo-300 bg-gradient-to-l from-neutral-50 to-indigo-200' +
                        'lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-indigo-300 lg:p-4 lg:dark:bg-zinc-800/30' +
                    'backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
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

export default HomeGarden;
