import { HomeFullPage } from "@/components/home";
import { homePageData } from "@/data/home";

export default function HomePage() {
  return (
    <main>
      <HomeFullPage data={homePageData} />
    </main>
  );
}
