export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <>
      <div>
        <h2>lectures </h2>
        {slug.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}
