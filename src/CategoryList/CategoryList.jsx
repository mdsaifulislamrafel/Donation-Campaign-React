import Cards from "../Cadrs/Cards";
import Hooks from "../Hooks/Hooks";

const CategoryList = () => {
    const { data, loading } = Hooks();
    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto my-12 py-3">
            {
                data.map((item) => <Cards key={item.id} item={item}></Cards>)
            }
        </div>
    );
};

export default CategoryList;