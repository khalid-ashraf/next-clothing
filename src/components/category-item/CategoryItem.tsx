import { memo } from "react";
import styles from "./CategoryItem.module.css";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ title, imageUrl }: CategoryItemProps) => {
  return (
    <div className={styles.category_container}>
      <div className={styles.background_image} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={styles.category_body_container}>
        <h2 className='font-semibold text-lg my-2 capitalize'>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.displayName = "CategoryItem";

export default memo(CategoryItem);
