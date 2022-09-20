export default {
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
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
      of: [{ type: 'track' }]
    }
  ]
}
