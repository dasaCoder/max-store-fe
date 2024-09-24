'use client'

import Head from "next/head"
import MainCover from "./components/main-cover"
import Header from "./components/header"
import ItemCarousel from "./components/item-carousel";
import CategoryCarousel from "./components/category-carousel";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/main";
import { useAppSelector } from "./lib/hooks";


export default function App() {
   const [itemList, setItemList] = useState<Item[]>([]);
   const {isLoading, notification} = useAppSelector(state => state.app);

   useEffect(() => {
      fetch("http://localhost:3000/item")
         .then(response => response.json())
         .then(data => setItemList(data))
         .catch(error => console.log(error));
   }, []);

   const categoryList: CategoryItem[] = [
      {
         "name": "Flowers",
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower5.png",
         "description": "",
         "id": ""
      },
      {
         "name": "Gift Packs",
         "imgUrl": "https://maxstore365.s3.amazonaws.com/gift.png",
         "description": "",
         "id": ""
      }
   ];

   return (
      <MainLayout>
         <MainCover />
         <div className="container mx-auto">
            <ItemCarousel items={itemList} />
            <CategoryCarousel items={categoryList} />
            <div className="text-dark">
            </div>
            <ItemCarousel title="New Arrivals" items={itemList} />
         </div>
      </MainLayout>
   );
}
