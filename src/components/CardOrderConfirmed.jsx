import React from "react";
import { zeroPrice } from "../../func/CalculationZeroCount";

const CardOrderConfirmed = (props) => {
  const price = props.product.price * props.product.count;
  return (
    <div
      className={`h-16 w-full m-3  p-1 border-b-1 flex justify-between itesm-center border-gray-200`}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src={props.product.image.thumbnail}
            className="w-12 rounded-sm"
          />
        </div>
        <div className="text-[13px] font-RedHatText-Bold px-2">
          <h3>{props.product.name}</h3>
          <div className="flex items-center">
            <h5 className="text-[14px] text-constom-red">
              {props.product.count}x
            </h5>
            <h5 className="text-[14px] ml-4 text-constom-400">
              @${props.product.price}
              {zeroPrice(props.product.price) === true ? ".00" : "0"}
            </h5>
          </div>
        </div>
      </div>
      <div className="text-[14px] font-thin text-constom-900 flex items-center justify-center">
        ${price}
        {zeroPrice(price) === true ? ".00" : "0"}
      </div>
    </div>
  );
};

export default CardOrderConfirmed;
