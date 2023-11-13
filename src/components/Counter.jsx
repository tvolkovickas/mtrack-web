import React, { useState, useEffect } from "react";
import { Unstable_Grid2 as Grid, Button } from "@mui/material";

import styles from "../style.module.css";

const Counter = ({ stopCounter, selectedItem, destination }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer1;
    if (counter !== null) {
      timer1 = setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer1);
    };
  }, [counter]);
  return (
    <Button fullWidth variant="contained" onClick={stopCounter} color="success">
      <Grid container disableEqualOverflow columns={3} sx={{ width: "100%" }}>
        <Grid
          xs={3}
          lg={1}
          className={styles.destination}
          sx={{
            borderRight: { lg: "1px solid white" },
            borderBottom: { xs: "1px solid white", lg: "none" },
          }}
        >
          {selectedItem}
        </Grid>
        <Grid xs={3} lg={1} className={styles.destination}>
          To
        </Grid>
        <Grid
          xs={3}
          lg={1}
          className={styles.destination}
          sx={{
            borderLeft: { lg: "1px solid white" },
            borderTop: { xs: "1px solid white", lg: "none" },
          }}
        >
          {destination}
        </Grid>
        <Grid xs={3} sx={{ borderTop: "1px solid white" }}>
          <div className={styles.counter}>
            <div>
              {Math.floor((counter % (60 * 60 * 24)) / (60 * 60))
                .toString()
                .padStart(2, "0")}
            </div>
            <div className={styles.blinker}>:</div>
            <div>
              {Math.floor((counter % (60 * 60)) / 60)
                .toString()
                .padStart(2, "0")}
            </div>
            <div className={styles.blinker}>:</div>
            <div>
              {Math.floor(counter % 60)
                .toString()
                .padStart(2, "0")}
            </div>
          </div>
        </Grid>
      </Grid>
    </Button>
  );
};

export default Counter;
