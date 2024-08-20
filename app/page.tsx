'use client'

import Head from "next/head"
import MainCover from "./components/mainCover"
import Header from "./components/header"
import ItemCarousel from "./components/item-carousel";
import CategoryCarousel from "./components/category-carousel";
import { Footer } from "./components/footer";


export default function Example() {
   const itemList: Item[] = [
      {
         "name": "Item 1",
         "price": 100,
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower3.png"
      },
      {
         "name": "Item 2",
         "price": 200,

         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower2.png"
      },
      {
         "name": "Item 3",
         "price": 300,
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower4.png"
      },
      {
         "name": "Item 4",
         "price": 400,
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower3.png"
      },
      {
         "name": "Item 5",
         "price": 500,
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower2.png"
      },
      {
         "name": "Item 6",
         "price": 600,
         "imgUrl": "https://maxstore365.s3.amazonaws.com/flower4.png"
      }
   ];

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
      <div className="bg-white">
         <Header />
         <MainCover />
         <div className="container mx-auto">
            <ItemCarousel items={itemList} />
            <CategoryCarousel items={categoryList} />
            <ItemCarousel title="New Arrivals" items={itemList} />
         </div>
         <div className="container mx-auto bg-primary">
            <Footer />
         </div>
      </div>
   );
}
