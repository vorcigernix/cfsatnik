/* eslint-disable no-undef */
import { json, useLoaderData, Link } from "remix";
import { getPosts } from "../../data/posts";

export const loader = async ({ params }) => {
  const { cursor } = params;
  return json(await getPosts(cursor));
};

export default function ListEntries() {
  const { data, cursor } = useLoaderData();
  //console.log(data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap" key={index}>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                {item.sex}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{item.status}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {item.name}
              </h2>
              <p className="leading-relaxed">{item.description}</p>
              <a
                className="text-red-500 inline-flex items-center mt-4"
                href="/"
              >
                Fetch
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        );
      })}
      <div className="flex w-full space-x-4 justify-end pt-12">
        <Link to="../0">
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          </button>
        </Link>
        <Link to={cursor ? `../${cursor}` : "/0"}>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
}
