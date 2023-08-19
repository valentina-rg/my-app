

function ProductCards({items, setSelectedProductId, setOpenDetail}) {


    return (
        <>
            {/* Render the grid of items */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {items &&
                    items?.map((item) => (
                        <div
                            key={item.name}
                            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                        >
                            <img
                                src={item.image?.src}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <dt className="truncate text-sm font-medium text-gray-500">
                                {item.tags}
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                                {item.title}
                            </dd>
                            <button
                                onClick={() => {
                                    setSelectedProductId(item.id);
                                    setOpenDetail(true);
                                }}
                                className={
                                    "mb-4 mt-2 bg-indigo-300 text-black font-[500] flex items-center gap-2 hover:bg-yellow-400 ease-in duration-300 py-2 px-4 rounded-[8px]"
                                }
                            >
                                <i className={"ri-heart-line"}>Take a look</i>
                            </button>
                        </div>
                    ))}
            </dl>
        </>

    )
        ;
}

export default ProductCards;
