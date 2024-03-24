/* eslint-disable react/prop-types */
import Cards from "../Cadrs/Cards";
import Spinners from "../Spinner/Spinners";


const CategoryList = ({loading, filteredData }) => {
    if(loading) {
        return (
            <Spinners></Spinners>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto my-12 py-3">
            {
                filteredData.map((item) => <Cards key={item.id} item={item}></Cards>)
            }
        </div>
    );
};

export default CategoryList;