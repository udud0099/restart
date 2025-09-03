import { notFound } from "next/navigation";

 
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if(reviewId > '50'){
    notFound()
  }
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
