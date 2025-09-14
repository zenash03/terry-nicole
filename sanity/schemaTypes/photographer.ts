export default {
  name: 'photographer',
  title: 'Photographer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
  ],
};