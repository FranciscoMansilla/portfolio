import ProjectModal from "./ProjectModal";

const ProjectCard = ({ item, openModal }) => {
  return (
    <div className="p-4 bg-white bg-opacity-50 rounded-lg  border border-gray-400 border-b-4 border-solid shadow-md">
      <div className="flex flex-row justify-center items-center w-full">
        <img className="rounded-lg w-20 h-20" src={item.icon} alt="" />
      </div>
      <div className="p-5">
        <a href="https://fran.website">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h5>
        </a>
        <span className={`z-10 bg-${item.color}-100 text-${item.color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full `}>{item.tag}</span>
        {/* <span className={`bg-${item.color}-100 text-${item.color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full `}>{item.tag}</span> */}
        <div className=" mb-3">
          <p className="font-normal text-gray-700">
            {item.description.slice(0, 69) +
              (item.description.length > 69 ? " ..." : "")}
          </p>
        </div>
        <div className="flex justify-between">
          <a
            rel="noreferrer"
            target="_blank"
            href={item.git}
            className="inline-flex items-center shadow-md bg-gray-400 hover:bg-gray-300 text-white text-sm py-2 px-2 border-b-4 border-gray-600 hover:border-gray-400 rounded hover:text-black
            hover:scale-105 ease-in-out duration-200"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32.58 31.77"
              className="w-3.5 h-3.5 ml-2"
            >
              <path
                fill="currentColor"
                d="M16.29,0A16.29,16.29,0,0,0,0,16.36,16.47,16.47,0,0,0,11.32,32.3c.83.15,1.13-.36,1.13-.8s0-1.58,0-3.11c-4.59,1-5.56-2.21-5.56-2.21a4.37,4.37,0,0,0-1.83-2.4c-1.5-1,.11-1,.11-1a3.47,3.47,0,0,1,2.54,1.71,3.54,3.54,0,0,0,4.86,1.38,3.57,3.57,0,0,1,1.06-2.23c-3.72-.42-7.64-1.86-7.64-8.29a6.49,6.49,0,0,1,1.74-4.52,6,6,0,0,1,.16-4.47s1.42-.45,4.65,1.73a15.77,15.77,0,0,1,8.28,0c3.23-2.18,4.65-1.73,4.65-1.73a6,6,0,0,1,.16,4.47,6.49,6.49,0,0,1,1.74,4.52c0,6.43-3.93,7.87-7.66,8.29a3.88,3.88,0,0,1,1.1,3c0,2.18,0,3.94,0,4.47s.3,1,1.14.8A16.47,16.47,0,0,0,32.58,16.36,16.29,16.29,0,0,0,16.29,0Z"
              />
            </svg>
          </a>
          <div
            onClick={() => openModal(item)}
            className="inline-flex items-center cursor-pointer shadow-md bg-blue-500 hover:bg-blue-400 text-white text-sm py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded
            hover:scale-105 ease-in-out duration-200"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
