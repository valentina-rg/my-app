export const PageHeading = ({ title, contentActions }) => {
    return (
        <div className="pt-8 pb-10 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-extrabold leading-7 text-am-800 sm:text-3xl sm:truncate">
                    {title}
                </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">{contentActions}</div>
        </div>
    );
};