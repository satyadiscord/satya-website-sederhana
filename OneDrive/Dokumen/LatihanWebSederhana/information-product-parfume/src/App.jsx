import component from "./Component/all-import-component";
import "./App.css";

const { Navbar, Home, CreateListParfume, NewParfume, ImageSection, Footer } =
  component;

function App() {
  return (
    <>
      <div className="w-full mb-36">
        <Navbar />
        <div className="w-[90%] m-auto mt-36 relative z-[20]">
          <Home />
        </div>
      </div>
      <div className="w-[86%] m-auto">
        <CreateListParfume />
        {/* garis garis dibawah start */}
        <div className="flex items-center justify-between mt-[135px] mb-36">
          <div className="w-[130px] md:w-[320px] lg:w-[430px] h-[1px] bg-black bg-opacity-40"></div>
          <div className="font-[arial] tracking-[2px] text-center text-lg font-medium w-[200px]">
            New parfume
          </div>
          <div className="w-[130px] md:w-[320px] lg:w-[430px] h-[1px] bg-black bg-opacity-40"></div>
        </div>
        {/* garis garis dibawah end */}
        <NewParfume />
      </div>
      <ImageSection />
      {/* footer start */}
      <div className="w-full mt-32">
        <Footer />
      </div>
      {/* footer end */}
    </>
  );
}

export default App;
