export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div>
        <h1> detail page {id}</h1>
      </div>
    </>
  );
}
