// "use client";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import { getHomePageContent } from "@/lib/api";

export default async function Home() {
  const data = await getHomePageContent();

  return (
    <div>
      <Navbar />
      <div className="relative">Dishes</div>
      <div>
        {/* <Cards data={data} /> */}
        Card for Food and restaurant
      </div>
      <div>Explore options near me</div>
      <div>Contact us</div>
    </div>
  );
}
