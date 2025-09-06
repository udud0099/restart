export default async function News({
  params,
  searchParams,
}: {
  params: Promise<{ newId: string }>;
  searchParams: Promise<{ cat: string; type: string }>;
}) {
  const { newId } = await params;
  const { cat, type } = await searchParams;
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
