function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tabs({ tabs, active, setActiveTab }) {
  return (
    <div>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-am-500 focus:border-am-500 sm:text-sm rounded-3xl"
          value={active}
          onChange={(e) => {
            setActiveTab(parseInt(e.target.value));
            if (tabs[e.target.value]?.onClick) {
              tabs[e.target.value]?.onClick();
            }
          }}
        >
          {tabs.map(({ name }, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map(({ name, onClick }, index) => (
              <div
                onClick={() => {
                  setActiveTab(index);
                  if (onClick) {
                    onClick();
                  }
                }}
                key={name}
                className={classNames(
                  index === active
                    ? "border-am-500 text-am-600"
                    : "border-transparent text-indigo-900 hover:text-indigo-800 hover:border-yellow-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-[800] text-[2.4rem] cursor-pointer"
                )}
                aria-current={index === active ? "page" : undefined}
              >
                {name}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
