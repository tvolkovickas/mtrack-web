import React from "react";
import { Unstable_Grid2 as Grid, Button } from "@mui/material";

const Materials = ({ selectItem }) => {
  const items = [
    "3 mm",
    "DUST",
    "6 mm",
    "10 mm",
    "14 mm",
    "20 mm",
    "28 mm",
    "",
    "40 mm",
    "BALLAST",
    "OVERSIZE",
    "",
    "SUPERFLOW 3",
    "BLEND 20/5",
    "TYPE 3",
    "FORMPAVE",
    "75/40",
    "TYPE B",
    "6F5",
    "",
    "SLURRY DUST",
    "6 BEST",
    "10 BEST",
    "20 BEST",
    "6 mm S/D",
    "10 mm S/D",
    "14 mm S/D",
    "OTHER",
  ];
  return (
    <Grid container spacing={2} disableEqualOverflow columns={8}>
      {items.map((item, index) => (
        <Grid xs={4} sm={2} key={index}>
          <Button
            fullWidth
            sx={{ height: "100%" }}
            variant="contained"
            onClick={() => selectItem(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Materials;
