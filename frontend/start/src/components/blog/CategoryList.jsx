import { getCategoryApi } from "@/services/CategoryServices";
import Link from "next/link";
import React from "react";

async function CategoryList() {
  
  const data = await getCategoryApi()

  const categories = data || [];


  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories?.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
