"use client";

import { getHomePosts, HomePostType } from "@/lib/supabase/queries";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/browserClient";

type HomePostProps = {
  posts: HomePostType | null
};

const HomePosts = ({ posts }: HomePostProps) => {
  const supabase = createClient();
  const { data } = useQuery({
    queryKey: ["home-posts"],
    queryFn: async () => {
      const { data, error } = await getHomePosts(supabase);
      if (error) throw new Error();

      return data;
    },
    initialData: posts,
    staleTime: 1000,
  });

  return (
    <div className="w-8/10">
      {data &&
        data.map((post) => (
          <Link
            href={`/${post.slug}`}
            key={post.id}
            className="border border-sushi p-4 block mb-4 rounded-2xl"
          >
            <h3 className="font-bold text-2xl">{post.title}</h3>
            <p className="text-right">Posted by {post.author.username}</p>
          </Link>
        ))}
    </div>
  );
};

export default HomePosts;
