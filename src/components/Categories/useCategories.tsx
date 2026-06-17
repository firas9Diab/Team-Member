import { useState, useEffect } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { ICategories } from "../../interface/interface";

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleCategories = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/categories",
        method: "GET",
      });
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  return {
    categories,
  };
};

export default useCategories;
