import React from "react";

const ButtonNavigation = ({currentPage, setCurrentPage, totalPages}) => {
    return (
        <>
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
        </>
    )

}
export default ButtonNavigation;