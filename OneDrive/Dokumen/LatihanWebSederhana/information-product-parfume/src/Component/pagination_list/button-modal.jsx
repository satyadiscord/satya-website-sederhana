import { useState } from "react";

export default function ButtonModal({ title, image, deskripsi, price }) {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        onClick={() => setIsModal(!isModal)}
        className="flex items-center justify-between w-[130px] block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        type="button"
      >
        Visit More
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

      {isModal && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModal(!isModal)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <div className="flex justify-between items-center flex-col md:flex-row">
                  <div className="w-full rounded-md">
                    <img
                      src={image}
                      alt="Parfume"
                      className="w-full bg-cover bg-center object-cover h-[250px]"
                    />
                  </div>
                  <div className="mt-1 pl-1 w-full font-[Poppins] md:pl-5 md:-mt-[38px]">
                    <div className="font-semibold text-xl font-[arial] tracking-wider">
                      {title}
                    </div>
                    <p className="text-base font-medium text-slate-500 md:mt-10">
                      {deskripsi}
                    </p>
                    <p className="text-lg font-semibold text-orange-500 md:mt-5">
                      ${price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
