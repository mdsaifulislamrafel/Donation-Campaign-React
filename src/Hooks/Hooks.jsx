import { useEffect, useState } from "react";

const Hooks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setData(data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return { data, loading };
};

export default Hooks;