export default {
  name: 'record',
  title: 'Record',
  type: 'document',
  fields: [
    {
      name: 'artist',
      title: 'Artist',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspots: true
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'tracks',
      title: 'Tracks',
      type: 'array',
      of: [
          {
            type: 'track'
          }
      ]
    }
  ]
}
