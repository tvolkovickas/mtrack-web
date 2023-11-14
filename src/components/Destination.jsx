import React from "react";
import { Unstable_Grid2 as Grid, Button } from "@mui/material";

import styles from "../style.module.css";

const Destination = ({ selectedItem, startCounter }) => {
  const destinationItems = [
    "STOCK",
    "BENNY",
    "WASHPLANT",
    "ST HEAVENS",
    "EXTENSION",
    "OTHER",
  ];
  return (
    <Grid container spacing={2} disableEqualOverflow columns={3}>
      <Grid xs={3}>
        <div className={styles.selectedItem}>{selectedItem}</div>
      </Grid>
      {destinationItems.map((item, index) => (
        <Grid xs={1} key={index}>
          <Button
            fullWidth
            sx={{
              height: "100%",
              fontSize: {
                md: "24px",
              },
              paddingTop: {
                md: "15px",
              },
              paddingBottom: {
                md: "15px",
              },
            }}
            variant="contained"
            color="success"
            onClick={() => startCounter(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Destination;
