import { Button } from "@material-tailwind/react";
import DonationData from "../DonationData/DonationData";
import LocalSavedData from "../Hooks/localSavedData";
import { useState } from "react";



const Donation = () => {
    const { localSaveData } = LocalSavedData();
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll);
    }
    if (localSaveData.length === 0) {
        return <p className="flex justify-center items-center text-5xl font-bold mt-48">Data is not found</p>
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-24 gap-6">
                {
                    localSaveData.slice(0, showAll ? localSaveData.length : 4).map(item => <DonationData key={item.id} item={item}></DonationData>)
                }
            </div>
            {
                localSaveData.length > 4 ? <div className="text-center mb-10">
                    <Button onClick={handleShowAll} color="green">{!showAll ? 'Show all' : 'Show Less'}</Button>
                </div> : null
            }
        </>
    );
};

export default Donation;