import React from "react";
import MainLayout from "../../layouts/main";
import { addItem } from "@/app/lib/features/cart/cart-slice";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import AddToCartBtn from "@/app/components/add-to-cart-btn";
import ItemCarousel from "@/app/components/item-carousel";

const ItemPage: React.FC<any> = async ({
  params,
}: {
  params: { id: string };
}) => {

  const item = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/item/${params.id}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  const suggestedItemList = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/item`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 my-[75px]">
        <div>
          <div className="bg-gray-10">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={item?.imgUrl}
              alt="Product"
            />
          </div>
          <div className="flex mt-4 space-x-4">
            {item?.images?.map((url: string, index: number) => (
              <img
                key={index}
                className="w-24 h-24 object-cover rounded-lg border-2 border-indigo-500"
                src={url}
                alt="Product"
              />
            ))}
          </div>
        </div>

        <div className="text-dark">
          <h1 className="text-2xl font-bold">{item?.name}</h1>
          <p className="text-xl font-semibold mt-2">${item?.price}</p>
          <div className="flex items-center mt-2">
            <div className="text-indigo-600 flex items-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
              </svg>
              <svg
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.27 3.924a1 1 0 00.95.69h4.124c.969 0 1.371 1.24.588 1.81l-3.334 2.42a1 1 0 00-.364 1.118l1.27 3.923c.3.922-.755 1.688-1.54 1.118l-3.334-2.42a1 1 0 00-1.176 0l-3.334 2.42c-.785.57-1.84-.196-1.54-1.118l1.27-3.924a1 1 0 00-.364-1.118L2.68 9.35c-.783-.57-.38-1.81.588-1.81h4.124a1 1 0 00.95-.69l1.27-3.924z" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 mt-4">{item?.description}</p>

          {/* <ColorSelector /> */}

          <AddToCartBtn item={item} />

          <div className="w-full pt-5 text-dark">
            <div className="mx-auto w-full max-w-lg divide-y divide-dark/5 rounded-xl bg-dark/5">
              <Disclosure as="div" className="p-6" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-dark group-data-[hover]:text-dark/80">
                    Features
                  </span>
                  <ChevronDownIcon className="size-5 fill-dark/60 group-data-[hover]:fill-dark/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-dark/50">
                  // features
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-dark group-data-[hover]:text-dark/80">
                    Shipping
                  </span>
                  <ChevronDownIcon className="size-5 fill-dark/60 group-data-[hover]:fill-dark/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-dark/50">
                  // features
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-dark group-data-[hover]:text-dark/80">
                    Our return policy
                  </span>
                  <ChevronDownIcon className="size-5 fill-dark/60 group-data-[hover]:fill-dark/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-dark/50">
                  // features
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <ItemCarousel
          title="You might also like..."
          items={suggestedItemList}
        />
      </div>
    </MainLayout>
  );
};

export default ItemPage;
