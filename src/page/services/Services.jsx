import { useState } from "react";
import "./Services.css"
import Collapse from "@mui/material/Collapse";
const services = [
  {
    id: 1,
    title: "UI / UX Design",
    details:
      "Exceptional user experience is vital for designing great products. Be it for a website, app. We create seamless digital products for our customers.",
  },
  {
    id: 2,
    title: "Creative Design / Development",
    details:
      "We work at intersection of art, design & technology. Our goal is to deliver amazing experiences that make people talk, & build strategic value for brands, tech, entertainment, arts & culture.",
  },
  {
    id: 3,
    title: "Webflow & Wordpress Development",
    details:
      "A website can't just be a catalog. We understand needs of fast pace marketing/GTM teams. 75+ organisations have trusted us for creating high quality websites for them",
  },
  {
    id: 4,
    title: "No-Code/SaaS development",
    details:
      "We leverage the power of no-code/low-code tools like Bubble.io, FlutterFlow & Webflow to build your apps 10X faster than traditional coders.",
  },
];
const Services = () => {
      const [expandedItem, setExpandedItem] = useState(null);

      const handleMouseOver = id => {
        setExpandedItem(id);
      };

      const handleMouseOut = () => {
        setExpandedItem(null);
      };
    return (
      <div className="flex justify-between items-center mt-11">
        <div className="flex">
          <img
            className="w-[300px] relative "
            src="https://assets-global.website-files.com/6493e2c640a47641d704896f/64b792e8d4bc082efaec4b5d_butterfly-p-500.webp"
            alt=""
          />
          <h1 className="text-5xl flex flex-col text-[#252525]  vertical-text">
            /SERVICES
          </h1>
        </div>
        {/*  */}
        <div className="max-w-[600px] h-auto">
          <p>
            Engage your customers on the platforms they Love. Website or Apps -
            we have you covered.
          </p>
          <div className="">
            {services.map(data => (
              <div
                key={data.id}
                className={`max-h-[400px] my-11 cursor-default ${
                  expandedItem === data.id
                    ? "highligh hover:bg-[#B91646] transaction duration-500"
                    : ""
                }`}
                onMouseOver={() => handleMouseOver(data.id)}
                onMouseOut={handleMouseOut}
              >
                <p className="text-3xl">{data.title}</p>
                <Collapse in={expandedItem === data.id}>
                  {data.details}
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Services;