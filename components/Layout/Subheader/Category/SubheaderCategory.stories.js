import SubheaderCategory from './SubheaderCategory.twig';

export default {
  title: 'Design System/Layout/Subheader/Category'
};

export const base = {
  render: (args) => SubheaderCategory(args),
  args: {
    title: 'Nom de la catégorie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...'
  },
  argTypes: {}
};
