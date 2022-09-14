export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture',
      options: {
        hotspot: true,
      }
    }
  ]
}
