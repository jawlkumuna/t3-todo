import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-3 ring-1 m-2 rounded-lg ring-slate-500 bg-slate-900">
            {post.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
