import React from "react";
import { zeroPrice } from "../../../func/CalculationZeroCount";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../../Redux/feature/ShopingCardSlice/shopingcard";
import { TiDeleteOutline } from "react-icons/ti";

const ProductShopingCard = (props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(RemoveItem(props.product.id));
  };
  const price = props.product.price * props.product.count;
  return (
    <div className="flex py-2 items-center justify-center relative">
      <div className="w-full py-2 border-b-1 border-gray-200">
        <div className="text-[13px] font-RedHatText-Bold ">
          {props.product.name}
        </div>
        <div className="flex items-center w-32 font-RedHatText-SemiBold justify-between">
          <h5 className="text-[14px] text-constom-red">
            {props.product.count}x
          </h5>
          <h5 className="text-[14px]  text-constom-400">
            @${props.product.price}
            {zeroPrice(props.product.price) === true ? ".00" : "0"}
          </h5>

          <h5 className="text-[14px] font-thin text-constom-900 ">
            ${price}
            {zeroPrice(price) === true ? ".00" : "0"}
          </h5>
        </div>
      </div>
      <div>
        <TiDeleteOutline
          onClick={removeHandler}
          className="text-[20px] text-gray-400 hover:text-black"
        />
      </div>
    </div>
  );
};

export default ProductShopingCard;
