import { useState, useEffect } from "react";
import { listParfume } from "./dataList-parfume";
import ButtonModal from "./button-modal";

export default function CreateListParfume() {
  const [listParfumes, setListParfumes] = useState(listParfume);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Mengatur jumlah item per halaman berdasarkan ukuran layar
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listParfumes.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(listParfumes.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3 mt-20">
        {currentItems.map(({ title, image, deskripsi, price }, index) => (
          <div
            key={index}
            className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="overflow-hidden">
              <img
                className="rounded-t-lg w-full h-[400px] bg-center bg-cover object-cover transition-all transform hover:scale-125 duration-1000"
                src={image}
                alt="Parfume"
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {deskripsi}
              </p>
              <ButtonModal
                title={title}
                image={image}
                deskripsi={deskripsi}
                price={price}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500 border-orange-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
