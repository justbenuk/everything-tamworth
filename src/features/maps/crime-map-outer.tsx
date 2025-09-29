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
      <div className="flex flex-row items-center justify-between bg-teal-500 p-2 rounded-2xl my-5">
        <h1 className="font-medium text-white">Crimes Recoreded</h1>
        <CategorySelector categories={categories} selectedCategory={selectedCategory} setCategory={setSelectedCategory} isOpen={open} setIsOpen={setOpen} />
      </div>
      <div className="overflow-hidden">
        <CrimeMapInner crimes={filteredCrimes} />
      </div>
    </>
  )
}

