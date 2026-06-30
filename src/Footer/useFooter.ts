import type { FooterCategories } from "../Interfaces";
const useFooter = () => {
  const footerCategories: FooterCategories = [
    {
      id: 1,
      title: "Category",
      items: [
        "Mobile and computers",
        "TV, Appliances, Electronics",
        "Men’s Fashion",
        "Home",
        "Kitchen",
        "Beauty",
        "Health",
        "Sports",
        "Baby Products",
      ],
    },
    {
      id: 2,
      title: "",
      items: [
        "Car",
        "Motor Bikes",
        "Book",
        "Video Games",
        "Shoes",
        "Toys",
        "Consoles",
        "Accessories",
        "Groceries",
      ],
    },
    {
      id: 3,
      title: "",
      items: [
        "Mobile and computers",
        "TV, Appliances, Electronics",
        "Men’s Fashion",
        "Home",
        "Kitchen",
        "Beauty",
        "Health",
        "Sports",
        "Baby Products",
      ],
    },
  ];
  return { footerCategories };
};
export default useFooter;
