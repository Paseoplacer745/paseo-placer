import Image from "next/image";
import { Kicker } from "./ui";

export default function PageHero({ kicker, title, lead, image, alt }: { kicker: string; title: string; lead: string; image: string; alt: string }) {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden border-b border-[#1E1E1E] bg-black">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/35" />
      <div className="reveal wrap relative flex w-full flex-col gap-5 pb-16 pt-32">
        <Kicker>{kicker}</Kicker>
        <h1 className="max-w-[900px] font-serif text-[clamp(46px,6.6vw,100px)] font-medium leading-[0.95]">{title}</h1>
        <p className="max-w-[580px] text-[19px] font-light text-[#DCD5CA]">{lead}</p>
      </div>
    </section>
  );
}
