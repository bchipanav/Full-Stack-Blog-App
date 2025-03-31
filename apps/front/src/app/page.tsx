import Hero from "@/components/hero";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Posts posts={[]} />
    </main>
  );
}
