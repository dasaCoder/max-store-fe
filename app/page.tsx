import MainCover from "./components/main-cover"
import ItemCarousel from "./components/item-carousel";
import CategoryCarousel from "./components/category-carousel";
import MainLayout from "./layouts/main";


export default async function App() {
   // const [itemList, setItemList] = useState<Item[]>([]);
   // const {isLoading, notification} = useAppSelector(state => state.app);

   const data = await fetch("http://localhost:3000/item")
   .then(response => response.json())
   .catch(error => console.log(error));

   // useEffect(() => {
   //    fetch("http://localhost:3000/item")
   //       .then(response => response.json())
   //       .then(data => setItemList(data))
   //       .catch(error => console.log(error));
   // }, []);

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
