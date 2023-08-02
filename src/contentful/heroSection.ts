import { TypeHeroSectionSkeleton } from "./types";
import { Entry } from "contentful";
import contentfulClient from "./contentfulClient";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type HeroSectionEntry = Entry<TypeHeroSectionSkeleton, undefined, string>;

export interface HeroSection {
  title: string;
  description: string;
  image: ContentImage | null;
}

interface FetchHeroSectionOptions {
  preview: boolean;
}

export function parseContentfulHeroSection(
  heroSectionEntry?: HeroSectionEntry
): HeroSection | null {
  if (!heroSectionEntry) {
    return null;
  }

  return {
    title: heroSectionEntry.fields.mainHeading || "",
    description: heroSectionEntry.fields.mainParagraph || "",
    image: parseContentfulContentImage(heroSectionEntry.fields.heroImage),
  };
}

export async function fetchHeroSection({
  preview,
}: FetchHeroSectionOptions): Promise<HeroSection> {
  const contentful = contentfulClient({ preview });

  const heroSectionResult =
    await contentful.getEntries<TypeHeroSectionSkeleton>({
      content_type: "heroSection",
    });

  return parseContentfulHeroSection(heroSectionResult.items[0]) as HeroSection;
}
