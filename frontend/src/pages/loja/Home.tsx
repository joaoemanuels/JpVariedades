import { HeroSection } from "../../components/home/Hero";
import heroImage from "../../assets/images/hero.png";
import { Categories } from "../../components/home/Categories";
import DailyOfferts from "../../components/home/DailyOfferts";

export default function Home() {
  return (
    <>
      <HeroSection image={heroImage} />;
      <Categories />
      <DailyOfferts />
    </>
  );
}
