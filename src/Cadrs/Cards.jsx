/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cards = ({item }) => {
    
    const { id, image, title, category, categoryBg, textColor, cardBg } = item;
    return (
        <div>
            <Card style={{ backgroundColor: cardBg }} className="mt-6 overflow-hidden">
                <CardHeader>
                    <img
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Link to={`/donation-details/${id}`}><Button style={{ backgroundColor: categoryBg, color: textColor }} size="sm" className="mb-3">{category}s</Button></Link>
                    <Typography style={{ color: textColor }} variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;