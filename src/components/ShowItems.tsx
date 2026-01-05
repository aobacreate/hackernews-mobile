"use client";

import { HNItem } from "@/types";

type Props = {
  items: HNItem[];
};

function formatDate(unixTime: number) {
  const date = new Date(unixTime * 1000); // 秒 → ミリ秒
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

export default function ShowItems({ items }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col border-b pb-2 gap-2"
        >
          <a
            href={item.url ?? `https://news.ycombinator.com/item?id=${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-medium
              hover:underline
              text-[length:var(--font-size-title)]
              leading-[var(--line-height-title)]
            "
          >
            {item.title}
          </a>
          <div
            className="
              text-[length:var(--font-size-meta)]
              leading-[var(--line-height-meta)]
              text-[color:var(--color-text-meta)]
            "
          >
            {item.score} points · by {item.by} · {formatDate(item.time)}
          </div>
        </div>
      ))}
    </div>
  );
}
