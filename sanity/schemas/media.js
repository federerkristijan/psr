export default {
  name: 'media',
  type: 'document',
  title: 'Media',
  fields: [
    {
      name: 'mediaTitle',
      title: 'Media Title',
      type: 'string'
    },
    {
      name: 'mediaUrl',
      title: 'Media Url',
      type: 'url'
    },
    {
      name: 'mediaImg',
      title: 'Media Image',
      type: 'image'
    },
    {
      name: 'mediaDesc',
      title: 'Media Description',
      type: 'text'
    }
  ]
}
