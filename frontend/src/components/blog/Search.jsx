"use client";
import { Input, Button } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

function Search({ defaultValue = "" }) {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current?.value?.trim();
    const params = new URLSearchParams();
    if (value) params.set("search", value);
    router.push(`${pathname}?${params.toString()}`)
  };

  return (
    <div className="flex items-end gap-2 w-80">
      <Input
        size="sm"
        label="جستجو"
        variant="underlined"
        type="text"
        defaultValue={defaultValue}
        ref={inputRef}
      />
      <Button
        color="default"
        variant="flat"
        onPress={handleSearch}
        className="w-10 min-w-10 h-10 px-0"
      >
        <CiSearch />
      </Button>
    </div>
  );
}

export default Search;
