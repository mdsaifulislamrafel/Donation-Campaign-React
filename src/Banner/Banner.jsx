/* eslint-disable react/prop-types */

import { Button, Input, Typography } from "@material-tailwind/react";
import './Banner.css';

const Banner = ({ value, setValue, handleSearch }) => {
  return (

    <div className="h-[450px] relative border flex flex-col gap-10 justify-center items-center">
      <div className="absolute inset-0 banner opacity-10"></div>
      <Typography variant="h2">I Grow By Helping People In Need</Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Search here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color="red"
          className="!absolute right-1 top-1 rounded"
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;