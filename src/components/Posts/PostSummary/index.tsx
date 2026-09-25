import { getHomePosts, HomePostType } from "@/lib/supabase/queries";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type PostSummaryProps = {
  posts: HomePostType | null;
};

const PostSummary = async ({ posts }: PostSummaryProps) => {
  const { data } = useQuery({
    queryKey: ["post-summary"],
    queryFn: async () => {
      const { data, error } = await getHomePosts();
      if (error) throw new Error()

      return data;
    },
    initialData: posts,
    staleTime: 1000,
  })

  return (
    <div className="w-8/10">
      {data &&
        data.map((post) => (
          <Link 
            href={`/${post.slug}`} 
            key={post.id}
            className="border border-sushi p-4 block mb-4 rounded-2xl"
          >
            <h3>{post.title}</h3>
            <p>{post.author.username}</p>
          </Link>
        ))}
    </div>
  );
};

export default PostSummary;
