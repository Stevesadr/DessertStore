import React from "react";
import { useSelector } from "react-redux";
import AddShopingCard from "./Btns/AddShopingCard";
import CountItems from "./Btns/CountItems";
import { zeroPrice } from "../../func/CalculationZeroCount";

const Card = (props) => {
  const data = useSelector((state) => state.shopingCardReducer);
  return (
    <div className="p-4 w-full rounded-xl ">
      <div className="w-full relative box-border">
        <img
          src={props.items.image.desktop}
          className={`rounded-lg w-full h-48 md:h-auto box-border
            ${
              data.items.find((item) => item.id === props.items.id)
                ? " outline-2 outline-constom-red "
                : ""
            }
          `}
        />
        <div className="w-full flex items-center justify-center absolute bottom-[-17px]">
          {data.items.find((item) => item.id === props.items.id) ? (
            <CountItems itemId={props.items.id} />
          ) : (
            <AddShopingCard data={props.items} />
          )}
        </div>
      </div>
      <div className="mt-4">
        {" "}
        <label className="font-RedHatText-Regular text-gray-500 text-[14px]">
          {props.items.category}
        </label>{" "}
        <h1 className="font-RedHatText-SemiBold">{props.items.name}</h1>{" "}
        <h3 className="font-RedHatText-SemiBold text-constom-red">
          ${props.items.price}
          {zeroPrice(props.items.price) === true ? ".00" : "0"}
        </h3>
      </div>
    </div>
  );
};

export default Card;
