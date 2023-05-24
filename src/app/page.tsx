import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size="lg"
            className="three-d text-black bg-gradient-to-r from-light-purple to-light-pink text-transparent bg-clip-text"
          >
            Easily determine <br /> text similarity.
          </Heading>

          <Paragraph className="max-w-xl lg:text-left">
            Unlock the power of text similarity with our cutting-edge API
            Discover the true likeness between two pieces of text using our
            state-of-the-art technology, now available to you with a
            complimentary{" "}
            <Link
              href="/login"
              className=" underline underline-offset-2 bg-gradient-to-r from-light-purple to-light-pink text-transparent bg-clip-text"
            >
              API key
            </Link>
            .
          </Paragraph>

          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow "
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
