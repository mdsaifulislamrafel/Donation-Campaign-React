import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Hooks from "../Hooks/Hooks";

const Home = () => {
    const [value, setValue] = useState("");
    const { data, loading } = Hooks();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    const handleSearch = () => {
        if (value.trim() !== "") {
            const findData = filteredData.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(findData);
        } else {
            setFilteredData(data);
        }
        setValue("");
    };


    return (
        <div>
            <Banner handleSearch={handleSearch} value={value} setValue={setValue}></Banner>
            <CategoryList loading={loading} filteredData={filteredData}></CategoryList>
        </div>
    );
};

export default Home;