"use client";
import { use } from "react";

export default function News({
  params,
  searchParams,
}: {
  params: Promise<{ newId: string }>;
  searchParams: Promise<{ cat: string; type: string }>;
}) {
  const { newId } = use(params);
  const { cat, type } = use(searchParams);
  return (
    <>
      <div>
        <h1>
          id is - {newId} and ? search params is {cat} and {type}
        </h1>
      </div>
    </>
  );
}
