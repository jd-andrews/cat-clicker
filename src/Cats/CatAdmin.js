import React from "react";
import { TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const CatAdmin = ({ editCat, currentlyEditing, bigCatEnergy, currentCat }) => {
  if (currentlyEditing) {
    return (
      <form>
        <TextField
          label="name"
          type="text"
          name={bigCatEnergy[currentCat].catName}
          value={bigCatEnergy[currentCat].catName}
          onChange={(e) => editCat(e, "catName", currentCat)}
        />

        <TextField
          label="touches"
          type="number"
          name={bigCatEnergy[currentCat].catCount}
          value={bigCatEnergy[currentCat].catCount}
          onChange={(e) => editCat(e, "catCount", currentCat)}
        />

        <TextField
          label="pic"
          type="text"
          name={bigCatEnergy[currentCat].catPic}
          value={bigCatEnergy[currentCat].catPic}
          onChange={(e) => editCat(e, "catPic", currentCat)}
        />
      </form>
    );
  } else {
    return <div></div>;
  }
};

export default CatAdmin;
