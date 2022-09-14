import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "pyenle2m",
  dataset: "production",
  apiVersion: "2022-09-14",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN,
})
