import CategoryItem from "@/components/category-item/CategoryItem";
import { categories } from "@/constants";

export default function HomePage() {
  return (
    <div className='categories-container w-[100%] flex flex-wrap justify-between'>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}

