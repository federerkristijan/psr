export default {
  name: 'team',
  title: 'Team',
  type: 'array',
  of: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  validation: Rule => Rule.unique()
}
