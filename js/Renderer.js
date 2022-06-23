const administrativeCenterRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "Performance",
  defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      // All features with value of "متميز" will be blue
      value: "0",
      symbol: {
        type: "simple-marker", // autocasts as new SimpleFillSymbol()
        color: "green",
        size: 9,
      },
    },
    {
      // All features with value of "جيد" will be green
      value: "1",
      symbol: {
        type: "simple-marker", // autocasts as new SimpleFillSymbol()
        color: "yellow",
        size: 10,
      },
    },
    {
      // All features with value of "متعثر" will be red
      value: "3",
      symbol: {
        type: "simple-marker", // autocasts as new SimpleFillSymbol()
        color: "red",
      },
    },
    {
      // All features with value of "ضعيف" will be yellow
      value: "2",
      symbol: {
        type: "simple-marker", // autocasts as new SimpleFillSymbol()
        color: "orange",
        size: 11,
      },
    },
  ],
};

const LandsRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "Type_Land",
  uniqueValueInfos: [
    {
      // All features with value of "صالحة للزراعة ومستزرعة" will be green
      value: "0",
      symbol: {
        type: "simple-fill",
        color: "green",
      },
    },
    {
      // All features with value of "صالحة للزراعة وغير مستزرعة" will be blue
      value: "1",
      symbol: {
        type: "simple-fill",
        color: [19, 235, 0],
      },
    },
    {
      // All features with value of "غير صالحة للزراعة" will be yellow
      value: "2",
      symbol: {
        type: "simple-fill",
        color: "yellow",
      },
    },
  ],
};

const AnimalsRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "Quantity_Production",
  defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
  visualVariables: [
    {
      type: "color",
      field: "Quantity_Production",
      normalizationField: "Count",
      legendOptions: {
        title: "% كمية الإنتاج",
      },
      stops: [
        {
          value: 0,
          color: "yellow",
          label: "=0%",
        },
        {
          value: 0.99,
          color: [19, 235, 0],
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          color: "green",
          label: "=100%",
        },
      ],
    },
    {
      type: "size",
      field: "Quantity_Production",
      normalizationField: "Capacity",
      stops: [
        {
          value: 0,
          size: 18,
          label: "=0%",
        },
        {
          value: 0.99,
          size: 12,
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          size: 8,
          label: "=100%",
        },
      ],
    },
  ],
};

const serviceCenterRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "Energy_Used",
  defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
  visualVariables: [
    {
      type: "color",
      field: "Energy_Used",
      normalizationField: "Capacity",
      legendOptions: {
        title: "% الطاقة الشاغرة",
      },
      stops: [
        {
          value: 0,
          color: "yellow",

          label: "=0%",
        },
        {
          value: 0.99,
          color: "orange",
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          color: "red",
          label: "=100%",
        },
      ],
    },
    {
      type: "size",
      field: "Energy_Used",
      normalizationField: "Capacity",
      stops: [
        {
          value: 0,
          size: 18,
          label: "=0%",
        },
        {
          value: 0.99,
          size: 12,
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          size: 8,
          label: "=100%",
        },
      ],
    },
  ],
};

const Labs_Workshops_Renderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "Actual_Power",
  defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
  visualVariables: [
    {
      type: "color",
      field: "Actual_Power",
      normalizationField: "Maximum_Power",
      legendOptions: {
        title: "% الطاقة الغير مستغلة",
      },
      stops: [
        {
          value: 0,
          color: "yellow",

          label: "=0%",
        },
        {
          value: 0.99,
          color: "orange",
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          color: "red",
          label: "=100%",
        },
      ],
    },
    {
      type: "size",
      field: "Actual_Power",
      normalizationField: "Maximum_Power",
      stops: [
        {
          value: 0,
          size: 18,
          label: "=0%",
        },
        {
          value: 0.99,
          size: 12,
          label: "<= 99% & >0%",
        },
        {
          value: 1,
          size: 8,
          label: "=100%",
        },
      ],
    },
  ],
};
// Exporting variables and functions
export {
  administrativeCenterRenderer,
  LandsRenderer,
  AnimalsRenderer,
  serviceCenterRenderer,
  Labs_Workshops_Renderer,
};
