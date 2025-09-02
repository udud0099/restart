import PostsList from "./components/PostsList";

 
export default function Home() {
  return (
    <>
      <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Posts (Sample)</h1>
      <PostsList />
    </main>
    </>
  );
}
