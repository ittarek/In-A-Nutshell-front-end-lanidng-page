import React from 'react';
import Marquee from 'react-fast-marquee';


const sponsor = [
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160d5c8901d87e37bc1f_stoa-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dba0fc13623e4bf91_nova-benefits-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f418c4f86ad4f417194b0c_letsventure-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dab86dd89fd3e116b_snaptrude-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160db31af272726c578b_xoxoday-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160dba0fc13623e4bf4f_polygon-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160db777afc8f2a60d6f_jupiter-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160d8a3d2877d15fbd07_healthkart-logo.svg",
  },
  {
    img: "	https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160c4ab67502c7240b24_amazon-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/64f4160cf762b61424fe8b78_accel-logo.svg",
  },
  {
    img: "https://assets-global.website-files.com/6493e2c640a47641d704896f/650ad9adee42c69db17d58f2_Frame%2030.svg",
  },
];
const BrandSponsor = () => {
    return (
      <div className="border border-1 border-slate-800 m-11 border-box rounded-3xl px-4 py-4 ">
        <Marquee>
          {sponsor.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    );
};

export default BrandSponsor;