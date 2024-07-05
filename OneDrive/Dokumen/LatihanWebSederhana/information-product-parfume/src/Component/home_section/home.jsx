import GambarPertama from "../img_parfume/parfume1.jpg";
import GambarKedua from "../img_parfume/parfume2.jpg";
import GambarKetiga from "../img_parfume/parfume3.jpg";

export default function Home() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3 items-center">
        <div className="relative md:col-span-2 md:row-span-2">
          <img
            src={GambarPertama}
            alt="Parfume"
            className="w-full bg-center bg-cover object-cover h-[600px]"
          />
          <div className="absolute top-[190px] md:top-[210px]">
            <h1 className="font-bold tracking-widest text-white text-2xl pl-2 md:pl-6">
              Title Parfume
            </h1>
            <p className="font-medium pl-2 md:pl-6 text-white text-opacity-80 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, enim.
            </p>
            <div className="mt-10 pl-2 md:pl-6">
              <a
                href="#"
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Shop Now
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:col-span-1">
          <img
            src={GambarKedua}
            alt="Parfume"
            className="w-full md:h-[300px] bg-cover bg-center"
          />
        </div>
        <div className="hidden md:block md:col-span-1">
          <img
            src={GambarKetiga}
            alt="Parfume"
            className="w-full md:h-[300px] bg-cover bg-center object-cover"
          />
        </div>
      </div>
    </>
  );
}
