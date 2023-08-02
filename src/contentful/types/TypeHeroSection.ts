import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeHeroSectionFields {
  mainHeading: EntryFieldTypes.Symbol;
  mainParagraph: EntryFieldTypes.Text;
  heroImage: EntryFieldTypes.AssetLink;
}

export type TypeHeroSectionSkeleton = EntrySkeletonType<
  TypeHeroSectionFields,
  "heroSection"
>;
export type TypeHeroSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>;
