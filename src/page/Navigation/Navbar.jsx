import Marquee from "react-fast-marquee";


const Navbar = () => {
    return (
      <div className="flex justify-between items-center w-[1200px] mx-auto">
        <div>
          <img
            src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64998075979306f7e73bf787_epyc-logo.svg"
            alt=""
          />
        </div>
        <div className="w-[500px] mx-auto">
          <Marquee speed={20}>
            <p className="mr-3 text-slate-600">
              w Webflow Professional Partners .b Bubble Bronze Agency
            </p>
          </Marquee>
        </div>
        <div>
          <p>TEAM@EPYC.IN</p>
        </div>
      </div>
    );
};

export default Navbar;