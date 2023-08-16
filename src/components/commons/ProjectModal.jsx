const ProjectModal = ({ isOpen, closeModal, item }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md max-w-xl md:max-w-6xl mx-4 transition-opacity ease-in-out duration-1000">
            <div className="w-full flex justify-end">
              <button
                className="flex items-center justify-end bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <img
              src={item.img}
              alt={item.name}
              className="max-w-full h-auto mx-auto mb-4"
              style={{ maxHeight: "300px" }} // Ajusta esta altura máxima según tus necesidades
            />
            <h2 className="mb-4 font-F-Bold text-lg md:text-3xl">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-4 text-xs md:text-lg">
              {item.description}
            </p>
            <div>
              <a href={item.git} target="_blank" rel="noreferrer">
                <button
                  className="bg-white py-1 px-2 w-28 rounded-lg border-2 border-solid border-black mx-2
                hover:bg-gray-200
                "
                >
                  Github
                </button>
              </a>
              <a href={item.page} target="_blank" rel="noreferrer">
                <button
                  className="bg-white py-1 px-6 w-28 rounded-lg border-2 border-solid border-black mx-2
                hover:bg-gray-200
                "
                >
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
