import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "pyenle2m",
  dataset: "production",
  apiVersion: "2022-09-14",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN,
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
