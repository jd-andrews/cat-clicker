import React from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";

const CatList = ({ changeCat, bigCatEnergy }) => {
  return (
    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        {bigCatEnergy.map((name, index) => (
          <div>
            <Button onClick={() => changeCat(index)}>{name.catName}</Button>
          </div>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default CatList;
