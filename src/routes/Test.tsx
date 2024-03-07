import { getAllCategories } from "@/store/menus/CategoryReducer";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const fetchCategories = async (dispatch: AppDispatch) => {
  try {
    dispatch(getAllCategories());
  } catch (error) {
    console.log("Error in form menus" + error);
  }
};

const Test = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories);
  // const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);



  return (
    <>
      <div className="bg-gray-400">
        {categories.isLoading ? (
          <p>Loading...</p>
        ) : categories.isError ? (
          <p>Error fetching categories</p>
        ) : (
          <select>
            {categories.data.map((category) => (
              <option key={category.id.toString()} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default Test;