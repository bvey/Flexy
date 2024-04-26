import FilterSelect from './FilterSelect.twig';

export default {
  title: 'Design System/Molecules/Filters/FilterSelect'
};

export const Base = {
  render: (args) => FilterSelect(args),
  args: {
    id: "filterSelect",
    placeholder: 'Taille',
    options: [{ value: 1, label: "S - 34/36" }, { value: 2, label: "M - 38/40" }, { value: 3, label: "L - 42/44" }],
  }
};

export const Color = {
  render: (args) => FilterSelect(args),
  args: {
    id: "colorFilterSelect",
    options: [{ value: 1, label: "<span class='colorRounded' data-bg-color='#6969B3'></span>State Blue" }, { value: 2, label: "<span class='colorRounded' data-bg-color='#FFB698'></span>Vermillon" }, { value: 3, label: "<span class='colorRounded' data-bg-color='#767676'></span>Grey" }],
  }
};
