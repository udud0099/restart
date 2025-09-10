export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    // Catch all segment
    <>
      <div>
        <h2> default not route lectures </h2>
        <br />
        {slug?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}
