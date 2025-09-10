export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length > 0) {
    return (
      // Catch all segment
      <>
        <div>
          <h2>lectures </h2>
          {slug?.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </>
    );
  }

  return (
    // Catch all segment
    <>
      <div>
        <h2> default not route lectures </h2>
      </div>
    </>
  );
}
