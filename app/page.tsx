import ItemCarousel from "@/app/components/item-carousel";
import CategoryCarousel from "@/app/components/category-carousel";
import MainLayout from "./layouts/main";
import MainCover from "@/app/components/main-cover";


export default async function App() {

   const data = await fetch("http://localhost:3000/item")
   .then(response => response.json())
   .catch(error => console.log(error));

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
            <h1></h1>
            <ItemCarousel items={data} />
            <CategoryCarousel items={categoryList} />
            <div className="text-dark">
            </div>
            <ItemCarousel title="New Arrivals" items={data} />
         </div>
      </MainLayout>
   );
}
