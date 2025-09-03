export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <div>
        <h1> detail page {productId}</h1>
      </div>
    </>
  );
}
