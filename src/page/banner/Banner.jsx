
import  "./Banner.css"
// https://assets-global.website-files.com/6493e2c640a47641d704896f/649c0975790a27e89e53823b_play-btn.svg
const Banner = () => {
    return (
      <div>
        <p className="text-center text-6xl leading-relaxed w-[750px] text-[#252525] mx-auto my-6">
          We Design & Build kickass websites & apps
        </p>
        <img
          className="w-[100px] relative -top-[150px] -right-[755px]"
          src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b792e8d4bc082efaec4b5d_butterfly-p-500.webp"
          alt=""
        />
        {/* button */}

        <div className="flex justify-evenly items-center w-[550px] mx-auto mt-6 mb-11">
          <button className="bg-[#105652] text-[#EDEADB] rounded-full flex items-center py-3 px-11 banner_button  ease">
            <span className="mr-5">Work Our</span>{" "}
            <svg
              className="w-[50px] h-[50px]"
              viewBox="0 0 54 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 8.5H52M52 8.5L44 0.5M52 8.5L44 16.5"
                stroke="currentColor"
              ></path>
            </svg>
          </button>

          <button className="bg-[#B91646] text-[#EDEADB] rounded-full flex items-center py-3 px-11 banner_button">
            <span className="mr-5">Book A Call</span>{" "}
            <svg
              className="w-[50px] h-[50px]"
              viewBox="0 0 54 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 8.5H52M52 8.5L44 0.5M52 8.5L44 16.5"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-2/6 mx-auto">
          <p className="text-center tracking-widest text-[#252525] font-semibold ">
            Designed & developed 75+ websites & apps 10x faster using Webflow,
            Bubble, & FlutterFlow.
          </p>
        </div>
      </div>
    );
};

export default Banner;