import { useState } from "react";
import { newProductParfume } from "./new-data-parfume";
import BtnModalNewProduct from "./btn-modal-newProduct";

export default function NewParfume() {
  const [newParfumeList, setNewParfumeList] = useState(newProductParfume);

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
        {newParfumeList.map(({ title, image, deskripsi, price }, index) => (
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
              {/* <ButtonModal
                title={title}
                image={image}
                deskripsi={deskripsi}
                price={price}
              /> */}
              <BtnModalNewProduct
                title={title}
                image={image}
                deskripsi={deskripsi}
                price={price}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
