import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  if (productId > "3") {
    notFound();
  }
  // hear we don't have product 4. so we set the limit grater than 3 is show default 404 page
  return (
    <>
      <div>
        <h1> detail page {productId}</h1>
      </div>
    </>
  );
}
