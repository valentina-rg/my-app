import React, {useEffect, useState} from "react";
import {PageHeading} from "../../ui-components/PageHeading";
import Lottie from "lottie-react";
import animationGarden from "../../lotties/animation_llb5i84t.json";
import apiRequest from "../../services/apiRequest";
import ProductModal from "../../ui-components/Modals/ProductModal";



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

    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;


    useEffect(() => {
        apiRequest.get(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/266329686089/products.json`)
            .then((res) => {
                setDetailCollection(res);
                // Mostra le cards dopo 3 secondi
                setTimeout(() => {
                    setShowCards(true);
                }, 3000);
            });
    }, []);

    console.log({detailCollection})

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = detailCollection?.data?.products?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((detailCollection?.data?.products?.length || 0) / itemsPerPage);


    return (
        <>
            {/*<div className={'ml-4'}>
                <div className={'font-semibold flex items-end uppercase ml-4 mt-4'}>
                    <div className={'w-16 h-[2px] bg-yellow-400 mr-3 mb-12'}>Discover the Beauty of Home & Garden Essentials</div>
                </div>
            </div>*/}
            <div className="mr-8 flex justify-center items-center z-0 flex-col opacity-90">
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
                                            setSelectedProduct(item);
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
    );
}

export default HomeGarden;
