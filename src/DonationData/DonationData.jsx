/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const DonationData = ({ item }) => {
    const { id, image, title, price, category, categoryBg, textColor, cardBg } = item;
    return (
        <div>
            <Card style={{ backgroundColor: cardBg }} className="shadow-none border-2 flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 flex items-center rounded-r-none"
                >
                    <img className="h-full"
                        src={image}
                    />
                </CardHeader>
                <CardBody>
                    <Link to="/"><Button style={{ backgroundColor: categoryBg, color: textColor }} size="sm" className="mb-3">{category}s</Button></Link>
                    <Typography variant="h4" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography style={{ color: textColor }} variant="h5" color="blue-gray">
                        ${price}
                    </Typography>
                    <Button style={{ backgroundColor: textColor }} className="text-white font-bold">View Details</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default DonationData;