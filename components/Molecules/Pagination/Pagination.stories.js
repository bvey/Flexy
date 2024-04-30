import Pagination from './Pagination.twig';

export default {
  title: 'Design System/Molecules/Pagination'
};

export const Base = {
  render: (args) => Pagination(args),
  args: {
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentPage: 2,
    totalPages: 12,
  },
  argTypes: {
    isPrev: {
      control: { type: 'boolean' }
    },
    isNext: {
      control: { type: 'boolean' }
    }
  },
};
