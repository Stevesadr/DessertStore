import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IncrisItem,
  DecreaseItem,
  RemoveItem,
} from "../../../Redux/feature/ShopingCardSlice/shopingcard";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const CountItems = (props) => {
  const data = useSelector((state) => state.shopingCardReducer);
  const dispatch = useDispatch();
  const fun = data.items.filter((item) => item.id === props.itemId)[0].count;
  const incrementhandler = () => {
    dispatch(IncrisItem(props.itemId));
  };
  const decrementhandler = () => {
    dispatch(DecreaseItem(props.itemId));
  };
  const removehandler = () => {
    dispatch(RemoveItem(props.itemId));
  };
  return (
    <div className="bg-constom-red  w-36 h-10 rounded-full flex items-center justify-around text-constom-50 ">
      <button
        className="text-[20px]  "
        onClick={fun === 1 ? removehandler : decrementhandler}
      >
        <FiMinusCircle className="hover:text-constom-red hover:bg-constom-50 rounded-full" />
      </button>
      <label>{fun}</label>
      <button className="text-[20px]" onClick={incrementhandler}>
        <FiPlusCircle className="hover:text-constom-red hover:bg-constom-50 rounded-full" />
      </button>
    </div>
  );
};

export default CountItems;
