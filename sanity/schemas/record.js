export default {
  name: "record",
  title: "Record",
  type: "document",
  fields: [
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspots: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "multiTrack",
      title: "Tracks",
      type: "array",
      of: [
        {
          title: "click on the file to change the name",

          type: "file",
          fields: [
            {
              name: "artist",
              title: "Artist",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
