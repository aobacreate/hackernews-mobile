export type HNItem = {
  id: number;
  title: string;
  by: string;
  score: number;
  url?: string;
  time: number;
  descendants?: number;
};

export type NavKey = "TOP" | "NEW" | "BEST";