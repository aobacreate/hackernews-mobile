import Header from "@/components/Header"
import MyNav from "@/components/MyNav";
import ShowPage from "@/components/ShowPage";

export default function Home() {
  return (
    <div>
      <Header title="Hacker News" />
      <main className="mx-auto w-full max-w-[393px] px-4">
        <MyNav />
        <ShowPage />
      </main>
    </div>
 
  );
}
