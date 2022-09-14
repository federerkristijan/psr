export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date'
    },
    {
      name: 'link',
      type: 'slug',
      title: 'Link'
    }
  ]
}
