import About from "@/components/About";
import Banner from "@/components/Banner";
import Buying from "@/components/Buying";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main>
      <Banner glob="WEN $GLOB" />
      <About />
      <Buying />
      <Faq />
    </main>
  );
}
