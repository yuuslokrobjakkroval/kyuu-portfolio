import posts from "@/generated/posts.json";
import type { Post } from "@/types/blog";

export function getAllPosts(): Post[] {
  return posts as Post[];
}
