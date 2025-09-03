export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <>
      <div>
        <h1>
          {" "}
          detail page {productId} - {reviewId}
        </h1>
      </div>
    </>
  );
}
