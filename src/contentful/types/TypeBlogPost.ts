import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  shortDescription: EntryFieldTypes.Text;
  post: EntryFieldTypes.RichText;
  thumbnail: EntryFieldTypes.AssetLink;
  slug: EntryFieldTypes.Symbol;
  author: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
