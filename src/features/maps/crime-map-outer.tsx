'use client'
import { CrimeProps } from "@/types";
import CrimeMapInner from "./crime-map-inner";
import CategorySelector from "../crime/components/category-selector";
import { useState } from "react";

type CrimeFilterProps = {
  crimes: CrimeProps[],
  categories: string[]
}

export default function CrimeMapOuter({ crimes, categories }: CrimeFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [open, setOpen] = useState(false);

  //filter the crimes
  const filteredCrimes = selectedCategory === "all" ? crimes : crimes.filter((c) => c.category === selectedCategory);
  return (
    <>
      <div className="overflow-hidden">
        <div className="mb-4 flex flex-row justify-end">
          <CategorySelector categories={categories} selectedCategory={selectedCategory} setCategory={setSelectedCategory} isOpen={open} setIsOpen={setOpen} />
        </div>
        <CrimeMapInner crimes={filteredCrimes} />
      </div>
    </>
  )
}

