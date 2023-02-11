import Tag from "./Tag";


function LatestArticle() {
  return (
    <div className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="py-6">
        <article>
          <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div>
              {/* <dt className="sr-only">Published on</dt> */}
              <div className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                July 6, 2022
                {" • "}
                12,327 views
              </div>
            </div>
            <div className="space-y-5 xl:col-span-4">
              <div className="space-y-1">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <div
                      className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                    >
                      This is the title
                    </div>
                  </h2>
                </div>
                <div className="flex flex-wrap">
                  <Tag />
                </div>
                <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                  summary
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default LatestArticle