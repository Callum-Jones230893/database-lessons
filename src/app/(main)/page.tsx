import HomePosts from "@/components/HomePosts";
import PostSummary from "@/components/Posts/PostSummary";
import { getHomePosts } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";

// export const revalidate = 600

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await getHomePosts(supabase);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="heading font-bold text-pacifika">Welcome to the forum</h2>
      <HomePosts posts={data} />
      {/* <PostSummary posts={data} /> */}
    </div>
  )
}
