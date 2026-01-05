"use client";

import { useEffect, useState, useMemo} from 'react';
import { HNItem } from "@/types";
import { fetchStoryIds, fetchItem } from '@/lib/fetch';
import ShowItems from './ShowItems';
import { useNav } from '@/context/NavContext';

const MAX_ITEMS = 30;
const LOAD_MORE_COUNT = 10;

export default function ShowPage() {
  const nav = useNav();

  if (!nav) {
    // Provider がない場合は何もしない
    return null; // または return;
  }

  const { activeNav, setActiveNav } = nav;

  const [ids, setIds] = useState<number[]>([]);
  const [items, setItems] = useState<HNItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canLoadMore = useMemo(() => {
    return !loading && items.length < Math.min(MAX_ITEMS, ids.length);
  }, [loading, items.length, ids.length]);

  async function onLoadMore() {
    if (!canLoadMore) return;

    setLoading(true);
    setError(null);

    try {
      const offset = items.length;
      const nextEnd = Math.min(offset + LOAD_MORE_COUNT, MAX_ITEMS, ids.length);
      const nextIds = ids.slice(offset, nextEnd);
      const fetched = await Promise.all(nextIds.map(fetchItem));
      setItems((prev) => [...prev, ...fetched]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load more");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const _ids = await fetchStoryIds(activeNav);
        setIds(_ids);
        setItems([]);
      } catch (e) {
        setError("Failed to load top stories");
      }
    })();
  }, [activeNav]);

  useEffect(() => {
    (async () => {
      if (ids.length === 0) return;
      try {
        const initialItems = await Promise.all(ids.slice(0, LOAD_MORE_COUNT).map(fetchItem));
        setItems(initialItems);
      } catch (e) {
        setError("Failed to load stories");
      }
    })();
  }, [ids]);

  return (
    <main className="mt-5 mx-auto w-full max-w-[393px]">
      <ShowItems items={items} />
      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      <div className="my-12 flex justify-center">
        {items.length >= Math.min(MAX_ITEMS, ids.length) ? (
          <div className="text-sm text-gray-500">No more stories</div>
        ) : (
          <button
            type="button"
            onClick={onLoadMore}
            disabled={!canLoadMore}
            className="
              rounded-md border px-4 py-2 text-sm
              disabled:opacity-50
            "
          >
            {loading ? "Loading..." : "Read more"}
          </button>
        )}
      </div>
    </main>
  );
}


