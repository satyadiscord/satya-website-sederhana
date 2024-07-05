export default function ComponentTailwind2() {
  return (
    <>
      <div>
        <h1 className="font-arial font-semibold text-xl text-center tracking-wider mb-36">
          Membuat GRID
        </h1>
        {/* membuat grid, menggunakan tailwind */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-6">
            <section className="w-60 rounded-md relative group">
              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Unplash"
                className="w-full h-full bg-center blur-sm hover:blur-none transition duration-500 cursor-pointer"
              />
              <p className="absolute top-[85px] right-[90px] font-arial font-semibold text-2xl text-white text-shadow-custom group-hover:scale-0 transition duration-500">
                Grid 1
              </p>
            </section>
            <section className="w-60 rounded-md relative col-end-4 group">
              <img
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Unplash"
                className="w-full h-full bg-center blur-sm hover:blur-none transition duration-500 cursor-pointer"
              />
              <p className="absolute top-[85px] right-[90px] font-arial font-semibold text-2xl text-white text-shadow-custom group-hover:scale-0 transition duration-500">
                Grid 2
              </p>
            </section>
            <section className="w-auto p-6 bg-hijau text-white text-center rounded-md col-end-3">
              Grid 3
            </section>
            <section className="w-60 p-6 bg-hijau text-white text-center rounded-md">
              Grid 4
            </section>
            <section className="w-60 p-6 bg-hijau text-white text-center rounded-md">
              Grid 5
            </section>
            <section className="w-auto p-6 bg-hijau text-white text-center rounded-md col-end-4">
              Grid 6
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
