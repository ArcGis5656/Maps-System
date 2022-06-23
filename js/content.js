function Lable($field) {
  return {
    // autocasts as new Lable()
    symbol: {
      type: "text", // autocasts as new TextSymbol()
      color: "black",
      haloColor: "white",
      haloSize: 1,
      font: {
        // autocast as new Font()
        // family: "Ubuntu Mono",
        size: 14,
        weight: "bold",
      },
    },
    labelExpressionInfo: {
      expression: $field,
    },
    maxScale: 0,
    minScale: 25000000,
  };
}

const Associationscontent = [
  {
    // Pass in the fields to display
    type: "fields",
    fieldInfos: [
      { label: "اسم الجمعية", fieldName: "Association_Name" },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "الأداء",
        fieldName: "Performance",
      },
      {
        label: "التلفون",
        fieldName: "relationships/4/Phone", // The field whose values you want to format
        format: {
          digitSeparator: true, // Uses a comma separator in numbers >999
        },
      },
      {
        label: "الاتحاد",
        fieldName: "relationships/1/Union_Name",
      },
      {
        label: "عدد الأعضاء",
        fieldName: "relationships/3/Member_Association",
      },
      {
        label: "المديرية",
        fieldName: "relationships/5/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/10/relationships/9/Government_Name_Arabic",
      },
      {
        label: "الطاقة الإنتاجية",
        fieldName: "relationships/1",
      },
    ],
  },
];

const Unionscontent = [
  {
    // Pass in the fields to display
    type: "fields",
    fieldInfos: [
      {
        label: "اسم الاتحاد",
        fieldName: "Union_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "الأداء",
        fieldName: "Performance",
      },
      {
        label: "الطاقة الإنتاجية",
        fieldName: "relationships/1",
      },
      {
        label: "التلفون",
        fieldName: "relationships/0/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المحافظة",
        fieldName: "relationships/2/relationships/9/Government_Name_Arabic",
      },
    ],
  },
];

const Landscontent = [
  {
    // Pass in the fields to display
    type: "fields",
    fieldInfos: [
      {
        label: "المالك",
        fieldName: "relationships/32/Owner_Name",
      },
      {
        label: "نوع الأرض",
        fieldName: "Type_Land",
      },
      {
        label: "المساحة",
        fieldName: "Area",
      },
      {
        label: "المديرية",
        fieldName: "relationships/30/Directorate_Name_Arabic",
      },
    ],
  },
];

const Animalscontent = [
  {
    // Pass in the fields to display
    type: "fields",
    fieldInfos: [
      {
        label: "المالك",
        fieldName: "relationships/26/Owner_Name",
      },
      {
        label: "نوع الحيوان",
        fieldName: "Type",
      },
      {
        label: "عدد الحيوانات",
        fieldName: "Count",
      },
      {
        label: "كمية الإنتاج",
        fieldName: "Quantity_Production",
      },
      {
        label: "المديرية",
        fieldName: "relationships/28/Directorate_Name_Arabic",
      },
    ],
  },
];

const Repositoriescontent = [
  {
    // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
    // Pass in the fields to display

    type: "fields",
    fieldInfos: [
      {
        label: "اسم المستودع",
        fieldName: "Repositories_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "السعر (م3/ساعة)",
        fieldName: "Price",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الاستيعابية",
        fieldName: "Capacity",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة المستخدمة",
        fieldName: "Energy_Used",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الشاغرة",
        fieldName: "expression/Vacant Energy",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "التلفون",
        fieldName: "relationships/8/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المنتج",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
      {
        label: "المديرية",
        fieldName: "relationships/10/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
    ],
  },
];

const Fridgescontent = [
  {
    // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
    // Pass in the fields to display

    type: "fields",
    fieldInfos: [
      {
        label: "اسم الثلاجة",
        fieldName: "Fridge_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "السعر (م3/ساعة)",
        fieldName: "Price",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الاستيعابية",
        fieldName: "Capacity",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة المستخدمة",
        fieldName: "Energy_Used",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الشاغرة",
        fieldName: "expression/Vacant Energy",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "التلفون",
        fieldName: "relationships/12/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المنتج",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
      {
        label: "المديرية",
        fieldName: "relationships/14/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
    ],
  },
];

const Labscontent = [
  {
    // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
    // Pass in the fields to display

    type: "fields",
    fieldInfos: [
      {
        label: "اسم المعمل",
        fieldName: "Lab_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "الطاقة القصوى",
        fieldName: "Maximum_Power",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الفعلية",
        fieldName: "Actual_Power",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الغير مستغلة",
        fieldName: "expression/Unused Energy",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "التلفون",
        fieldName: "relationships/18/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المديرية",
        fieldName: "relationships/19/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
    ],
  },
];

const Workshopscontent = [
  {
    // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
    // Pass in the fields to display

    type: "fields",
    fieldInfos: [
      {
        label: "اسم المعمل",
        fieldName: "Lab_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "الطاقة القصوى",
        fieldName: "Maximum_Power",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الفعلية",
        fieldName: "Actual_Power",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "الطاقة الغير مستغلة",
        fieldName: "expression/Unused Energy",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "التلفون",
        fieldName: "relationships/20/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المديرية",
        fieldName: "relationships/21/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
    ],
  },
];

const PointsSalescontent = [
  {
    // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
    // Pass in the fields to display

    type: "fields",
    fieldInfos: [
      {
        label: "اسم نقطة البيع",
        fieldName: "Ponit_Sale_Name",
      },
      {
        label: "المسؤول",
        fieldName: "Administrator",
      },
      {
        label: "الكود",
        fieldName: "Code",
      },
      {
        label: "التصريح",
        fieldName: "Declaration",
      },
      {
        label: "المنتجات",
        fieldName:
          "relationships/22/relationships/45/Product_Manufacturer_Name",
        // fieldName: "relationships/23/relationships/47/Product_Vegetarian_Name",
      },
      {
        label: "متوسط كميةالبيع",
        fieldName: "expression/average sales quantity",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "التلفون",
        fieldName: "relationships/24/Phone",
        format: {
          digitSeparator: true,
        },
      },
      {
        label: "المديرية",
        fieldName: "relationships/25/Directorate_Name_Arabic",
      },
      {
        label: "المحافظة",
        fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
      },
    ],
  },
];

// Exporting variables and functions
export {
  Lable,
  Associationscontent,
  Unionscontent,
  Landscontent,
  Animalscontent,
  Repositoriescontent,
  Fridgescontent,
  Labscontent,
  Workshopscontent,
  PointsSalescontent,
};
