"use client";
import { useRouter } from "next/navigation";
import { categoryType, eventCategories } from "@/DB/District";

type CategoryExplaoreProps = {
  categoryData: categoryType[];
  navigateTo?: string;
};
const CategoryExplaore = ({
  categoryData,
  navigateTo,
}: CategoryExplaoreProps) => {
  const router = useRouter();

  const handleCategoryData = (id: string) => {
    localStorage.setItem("EventSelectCategory", id);
    if (navigateTo) router.push(navigateTo);
  };

  return (
    <div className="w-full">
      <h1 className="text-[25px] font-semibold">Explore Events</h1>
      <div className="my-5 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-7 gap-5">
        {categoryData.map((items) => {
          return (
            <div
              key={items.id}
              onClick={() => handleCategoryData(items.id)}
              className="hover:cursor-pointer w-full p-2 rounded-3xl bg-blue-200 hover:bg-blue-100 transition-colors duration-100 flex flex-col text-center items-center justify-between"
            >
              <h1 className="text-[15px] text-gray-700 font-semibold">
                {items.title}
              </h1>
              <img
                src={items.image_url}
                alt={items.title}
                className="my-3 h-20 w-20 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryExplaore;
