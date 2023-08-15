import React, { useState } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = () => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    className: active === index ? "bg-blue-gray-100 text-blue-gray-900" : "",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex w-full justify-around mt-10">
      <ButtonGroup className="flex  w-1/3 justify-around" variant="outlined" color="blue-gray">
        <IconButton onClick={prev}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
        <IconButton onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
