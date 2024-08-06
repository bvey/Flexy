import Score from './Score.twig';

export default {
  title: 'Design System/Molecules/Score'
};

export const base = {
  render  : (args) => Score(args),
  args    : {
    score: 4,
    maxScore: 5,
  },
  argTypes: {}
};
