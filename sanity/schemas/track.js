export default {
  name: 'track',
  title: 'Track',
  type: 'file',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string'
    },
    {
      name: 'src',
      title: 'Source URL',
      type: 'file'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    }
  ]
}
