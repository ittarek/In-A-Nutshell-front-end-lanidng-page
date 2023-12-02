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
    title: "",
    technology: "",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041a02c256f83aea7af035_SeedToScale%20(1)-p-1600.webp",
  },
  {
    id: 2,
    title: "",
    technology: "",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1c1f5bfe01360e5cf7_Polygon-p-1600.webp",
  },
  {
    id: 3,
    title: "",
    technology: "",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1ccf1e8af5f37bed59_Jupiter-p-1600.webp",
  },
  {
    id: 4,
    title: "",
    technology: "",
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/65041b1d580984bf8c79bd9c_Frame%207212-p-1600.webp",
  },
  {
    id: 5,
    title: "",
    technology: "",
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
          
              <img className="rounded-3xl" src={data.img} alt="" />
       
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
