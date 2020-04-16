import React from "react";
import CatAdmin from "./CatAdmin";
import { Button } from "@material-ui/core";

const AdminButton = ({
  currentlyEditing,
  editCat,
  editSwitch,
  bigCatEnergy,
  currentCat,
  est,
}) => {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={editSwitch}
      >
        ADMIN
      </Button>
      <CatAdmin
        editCat={editCat}
        currentlyEditing={currentlyEditing}
        bigCatEnergy={bigCatEnergy}
        currentCat={currentCat}
        est={est}
      />
    </div>
  );
};

export default AdminButton;
