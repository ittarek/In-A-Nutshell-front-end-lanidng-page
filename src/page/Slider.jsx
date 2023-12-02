import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {
  EffectCube,
  EffectCreative,
  Pagination,
  Mousewheel,
} from "swiper/modules";


const slideData = [
  {
    id: 1,
    title: "SeedToscale by",
    technology: "Branding, UI/UX. SEO, Webflow",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-1600.webp",
  },
  {
    id: 2,
    title: "Polygon Labs",
    technology: "UI/UX, 3D, Webflow, Interactions",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-1600.webp",
  },
  {
    id: 3,
    title: "Jupiter",
    technology: "Webflow, Automations, Viral, Loops",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-1600.webp",
  },
  {
    id: 4,
    title: "Nova Benefits",
    technology: "UI/UX, Webflow, Interactions",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-1600.webp",
  },
  {
    id: 5,
    title: "LetsVenture & Scalix",
    technology: "Branding, UI/UX, Webflow, Bubble.io",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041c4e6f21544db8a4dfc2_Let%27s%20Venture.webp",
  },
];

function Slider() {
  return (
    <div className="w-[1200px] mx-auto">
      <div className="flex  justify-center items-center mt-6 ">
        <span className="divide-y-8  divide-slate-400"></span>
        <span className=" ">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.51776 7.39986C21.8528 7.39986 7.51776 -6.79987 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 21.8528 7.39986 7.51776 7.39986ZM7.51776 7.39986C-7.14721 7.39986 7.51776 -6.99983 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 -7.14721 7.39986 7.51776 7.39986Z"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        <p className="text-bolder text-black mx-6 text-center">
          {" "}
          / FEATURED WORK /
        </p>
        <span>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.51776 7.39986C21.8528 7.39986 7.51776 -6.79987 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 21.8528 7.39986 7.51776 7.39986ZM7.51776 7.39986C-7.14721 7.39986 7.51776 -6.99983 7.51776 7.39986ZM7.51776 7.39986C7.51776 20.5 -7.14721 7.39986 7.51776 7.39986Z"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        speed={600}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "top center",
            translate: [0, "-5%", -200],
            // rotate: [100, 0, 0],
          },
          next: {
            origin: "bottom center",
            translate: [0, "100%", -200],
            // rotate: [-100, 0, 0],
            // rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCube, EffectCreative, Mousewheel, Pagination]}
        className="mySwiper"
      >
        {slideData.map(data => (
          <SwiperSlide key={data.id}>
            <div className="relative top-[400px] left-[10px] text-white">
              <h1 className="text-3xl mb-4">{data.title}</h1>
              <small>{data.technology}</small>
            </div>
            <img className="rounded-3xl" src={data.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="bg-[#B91646] text-[#EDEADB] rounded-full flex items-center py-3 px-11 mx-auto banner_button">
        <span className="mr-5">See All Project</span>{" "}
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
  );
}

export default Slider;
