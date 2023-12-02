import "./App.css";
import Navbar from "./page/Navigation/Navbar";
import Banner from "./page/banner/Banner";
import Slider from "./page/Slider";
import BrandSponsor from "./page/BrandMarque/BrandSponsor";

const App = () => {
  return (
    <div className=" ">
      {/* Border container */}
      <div className="border border-1 border-slate-400 m-11 rounded-3xl px-2 py-2 border-container ">
        {/* Main content */}
        <div className="relative z-10 mx-auto p-8 ">
          <Navbar />
          <Banner />
          <BrandSponsor/>
          <Slider />

          <div className="flex justify-between mx-11">
            <div className="">
              <p className="text-2xl  border bottom-2 py-2 px-4 rounded border-slate-400 mt-3">
                Text Around the Border
              </p>
            </div>

            {/* Button */}
            <button className="mt-3  border bottom-2 py-2 px-4 rounded border-slate-400">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

