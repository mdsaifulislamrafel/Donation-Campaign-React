import { useParams } from "react-router-dom";
import Hooks from "../Hooks/Hooks";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { savedLocalStorage } from "../utlity/localStorage";

const DonationDetails = () => {
    const { id } = useParams();
    const intId = parseInt(id);
    const { data, loading } = Hooks();
    const [singleData, setSingleData] = useState({});

    const handleDonation = () => {
        savedLocalStorage(singleData);
    };

    useEffect(() => {
        if (data) {
            const singleData = data.find(item => item.id === intId);
            setSingleData(singleData);
        }
    }, [data, intId]);
    const { image, title, description, price, textColor } = singleData || {};
    return (
        <div className="max-w-7xl mx-auto">
            <Card className="mt-12 rounded-md w-full overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none relative"
                >
                    <img className="w-full h-[550px rounded-md]"
                        src={image}
                    />
                    <div className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 p-8">
                        <Button onClick={handleDonation} style={{ backgroundColor: textColor }} size="md" className="rounded-md capitalize text-xl">Donate ${price}</Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <Typography variant="h2" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {description}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default DonationDetails;