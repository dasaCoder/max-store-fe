"use client";

import { addItem } from "@/app/lib/features/cart/cart-slice";
import { useDispatch } from "react-redux";

interface AddToCartBtnProps {
  item: Item;
}

export default function AddToCartBtn({ item }: AddToCartBtnProps) {
  const dispatch = useDispatch();

  return (
    <button
      className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg w-full hover:bg-indigo-700 transition-colors"
      onClick={() => {
        if (item) {
          dispatch(
            addItem({
              id: item._id,
              name: item.name,
              price: item.price,
              imgUrl: item.imgUrl,
              quantity: 1,
            })
          );
        }
      }}
    >
      Add to bag
    </button>
  );
}
