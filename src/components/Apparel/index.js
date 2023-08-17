import React, {useEffect, useState} from "react"
import {PageHeading} from "../../ui-components/PageHeading";
import Lottie from "lottie-react";
import animationApparel from "../../lotties/animation_llcoalr4.json";
import apiRequest from "../../services/apiRequest";
import ProductModal from "../../ui-components/Modals/ProductModal";
import Select from "../../ui-components/Select";
import Label from "../../ui-components/Label";
import SearchSelect from "../../ui-components/SearchSelect";

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
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]); // Default value 'all'
    const [selectedSortOption, setSelectedSortOption] = useState([]); // Default value 'default'


    const itemsPerPage = 3;




    useEffect(() => {
        apiRequest.get(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329391177/products.json`)
            .then((res) => {
                setDetailCollection(res);
                if (Array.isArray(res)) {
                    setSelectedSortOption([...new Set(res.map(item => item['tags']))]
                        .map(i => ({ label: i, value: i })));
                }
                // Mostra le cards dopo 3 secondi
                setTimeout(() => {
                    setShowCards(true);
                }, 1000);
            });
    }, []);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = detailCollection?.data?.products?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((detailCollection?.data?.products?.length || 0) / itemsPerPage);




    return (
        <>
            {/*<div className={'ml-4'}>
                <PageHeading title={'Apparel'}/>
            </div>
            <div className={'font-semibold flex justify-start items-start uppercase ml-8 mt-4'}>
                <div className={'w-16 h-[2px] bg-yellow-400 mr-8 mb-12'}>Welcome to our Apparel section</div>
            </div>*/}
            <div className="flex justify-center items-center space-x-4 mb-4">
            </div>
            <div className="mr-8 flex justify-center items-center z-0 flex-col opacity-90">
                <Lottie options={defaultOptions}
                        height={200} width={200}
                        animationData={animationApparel}
                        className="animation"
                />
                {showCards && (
                    <>
                        <dl className="grid grid-cols-3 gap-2 sm:grid-cols-3 cards">
                            {currentItems?.map((item) => (
                                <div key={item.name}
                                     className=" mt-4 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <img src={item.image?.src} alt={item.title} className="w-full h-48 object-cover"/>
                                    <dt className="truncate text-sm font-medium text-gray-500">{item.tags}</dt>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.title}</dd>
                                    <button
                                        onClick={() => {
                                            setSelectedProductId(item.id); // Assuming the product ID is available as item.id
                                            setSelectedProduct(item);
                                            setOpenDetail(true);
                                        }}
                                        className="mr-2 mt-2 font-mono border-b border-indigo-300 bg-gradient-to-l from-neutral-50 to-indigo-200' +
                                        'lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-indigo-300 lg:p-4 lg:dark:bg-zinc-800/30' +
                                        'backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">Vedi
                                        il prodotto
                                    </button>
                                </div>
                            ))}

                        </dl>
                    </>
                )}
                <div className="flex justify-center  z-40 mb-8">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mr-2 font-mono border-b border-indigo-300 bg-gradient-to-l from-neutral-50 to-indigo-200' +
                        'lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-indigo-300 lg:p-4 lg:dark:bg-zinc-800/30' +
                    'backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
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
        </>
    )

}

export default Apparel;