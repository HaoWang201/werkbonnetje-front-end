export const filters: {
  title: string
  options: {label: string, value: any}[]
}[] = [
  {
    title: 'Time range',
    options: [
      {
        label: 'Last 7 days',
        value: 7
      },
      {
        label: 'Last 30 days',
        value: 30
      },
      {
        label: 'All time',
        value: -1
      }
    ]
  },
  {
    title: 'Select action',
    options: [
    ]
  },
  {
    title: 'Send by mail',
    options: [
    ]
  },
];
