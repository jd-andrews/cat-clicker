import React from "react";
import AdminButton from "./AdminButton";

const CatDisplay = ({
  click1,
  currentCat,
  bigCatEnergy,
  editCat,
  currentlyEditing,
  editSwitch,
  est,
}) => {
  return (
    <div>
      <h2>Current Cat is {bigCatEnergy[currentCat].catName}</h2>
      <div>
        <p>dis pussy name {bigCatEnergy[currentCat].catName}</p>
        <p>it touched {bigCatEnergy[currentCat].catCount} times</p>
        <AdminButton
          editCat={editCat}
          currentlyEditing={currentlyEditing}
          editSwitch={editSwitch}
          bigCatEnergy={bigCatEnergy}
          currentCat={currentCat}
          est={est}
        />
        <img
          onClick={() => click1()}
          src={bigCatEnergy[currentCat].catPic}
          alt="cat"
        />
      </div>
    </div>
  );
};

export default CatDisplay;
