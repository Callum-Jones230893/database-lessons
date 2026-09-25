import { createClient } from "./browserClient";
import { type QueryData } from "@supabase/supabase-js";

export type HomePostType = QueryData<ReturnType<typeof getHomePosts>>;

export const getHomePosts = async (supabase: ReturnType<typeof createClient>) => {
  // const supabase = createClient();
  return await supabase
    .from("post")
    .select(`id, title, slug, author("id", "username")`);
};

export type SinglePostType = QueryData<ReturnType<typeof getSinglePost>>

export const getSinglePost = async (slug: string) => {
  const supabase = createClient();
  return await supabase
    .from("post")
    .select(`title, content, author("id", "username")`)
    .eq(`slug`, slug)
    .single();
};

export type SearchPostType = QueryData<ReturnType<typeof searchPosts>>

export const searchPosts = async (searchTerm: string) => {
  const supabase = createClient()
  return await supabase
    .from("post")
    .select(`title, slug`)
    .textSearch(`title`, searchTerm)
}