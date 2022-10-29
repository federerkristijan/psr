export default {
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "tracks",
      title: "Tracks",
      value: "file",
      type: "string",
      // of: [{ type: 'track' }]
    },
    {
      name: "singleTrack",
      title: "Tracks",
      type: "file",
      // of: [{ type: 'track' }]
    },
    {
      name: "multiTrack",
      title: "multiTrack",
      type: "array",
      of: [
        {
          type: "file",
        },
      ],
    },
  ],
};
