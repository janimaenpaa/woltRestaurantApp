import React from "react";

import Button from "@material-ui/core/Button";

const RestaurantSorter = ({ handleSorting, isAscending }) => {
  return (
    <div style={{margin: "20px"}}>
      {!isAscending ? (
        <Button variant="contained" color="secondary" onClick={handleSorting}>
          Järjestä nousevasti
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleSorting}>
          Järjestä laskevasti
        </Button>
      )}
    </div>
  );
};

export default RestaurantSorter;
