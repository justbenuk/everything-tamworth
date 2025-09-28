import { Button } from "@/components/ui/button";
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Command } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

export default function CategorySelector({ categories, selectedCategory, setCategory, isOpen, setIsOpen }: {
  categories: string[],
  selectedCategory: string,
  setCategory: (category: string) => void,
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-5">
      {/* Category selector */}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={isOpen} className="w-[250px] justify-between">
            {selectedCategory === 'all' && 'Search By Category'}
            {selectedCategory ? categories.find((cat) => cat === selectedCategory) : "Select category..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[250px] p-0 z-[9999]"
          side="bottom" // force it to open below
          align="start"
          sideOffset={5}
          forceMount
        >
          <Command>
            <CommandInput placeholder="Search categories..." />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value="all"
                  onSelect={() => {
                    setCategory("all");
                    setIsOpen(false);
                  }}
                >
                  All
                  {selectedCategory === "all" && <Check className="ml-auto h-4 w-4" />}
                </CommandItem>
                {categories.map((cat) => (
                  <CommandItem
                    key={cat}
                    value={cat}
                    onSelect={() => {
                      setCategory(cat);
                      setIsOpen(false);
                    }}
                  >
                    {cat}
                    {selectedCategory === cat && <Check className="ml-auto h-4 w-4" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

