'use client'

import Head from "next/head"
import MainCover from "./components/mainCover"
import Header from "./components/header"
import Carousel from "./components/carousel";


export default function Example() {
  const itemList: Item[] = [
    {
       "name":"Item 1",
       "price":100,
       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower3.png"
    },
    {
       "name":"Item 2",
       "price":200,

       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower2.png"
    },
    {
       "name":"Item 3",
       "price":300,
       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower4.png"
    },
    {
       "name":"Item 4",
       "price":400,
       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower3.png"
    },
    {
       "name":"Item 5",
       "price":500,
       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower2.png"
    },
    {
       "name":"Item 6",
       "price":600,
       "imgUrl":"https://maxstore365.s3.amazonaws.com/flower4.png"
    }
 ];
  return (
    <div className="bg-primary">
      <Header />
      <MainCover />
      <Carousel items={itemList}/>
      <Carousel items={itemList}/>
      <Carousel items={itemList}/>
      <Carousel items={itemList}/>
    </div>
  );
}
