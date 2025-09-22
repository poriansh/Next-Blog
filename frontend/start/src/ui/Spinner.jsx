"use client";
import { Spinner } from "@heroui/react";
export function SpinnerLoader() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size="md" variant="gradient" />
    </div>
  );
}

export function SpinnerMini() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size="sm" variant="gradient" />
    </div>
  );
}
