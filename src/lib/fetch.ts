import { HNItem } from "@/types";
import { NavKey } from "@/types";

const STORY_ENDPOINT: Record<NavKey, string> = {
  TOP: "topstories",
  NEW: "newstories",
  BEST: "beststories",
};

export async function fetchStoryIds(navkey: NavKey) {
  const endpoint = STORY_ENDPOINT[navkey];

  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${endpoint}.json`,
    {
      // cache: "no-store",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return (await res.json()) as number[];
}

export async function fetchItem(id: number) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to fetch item: ${id}`);
  return (await res.json()) as HNItem;
}
