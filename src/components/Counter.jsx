import React, { useState, useEffect } from "react";
import { Unstable_Grid2 as Grid, Button } from "@mui/material";

import styles from "../style.module.css";

const Counter = ({ stopCounter, selectedItem, destination }) => {
  const [counter, setCounter] = useState(0);
  const [tipOff, setTipOff] = useState(false);

  useEffect(() => {
    let timer1;
    if (counter !== null && counter < 600) {
      timer1 = setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else {
      setTipOff(true);
    }

    return () => {
      clearTimeout(timer1);
    };
  }, [counter]);
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={stopCounter}
      color={tipOff ? "error" : "success"}
    >
      {!tipOff && (
        <Grid container disableEqualOverflow columns={3} sx={{ width: "100%" }}>
          <Grid
            xs={3}
            md={1}
            className={styles.destination}
            sx={{
              borderRight: { md: "1px solid white" },
              borderBottom: { xs: "1px solid white", md: "none" },
              paddingTop: {
                md: "40px",
              },
              paddingBottom: {
                md: "40px",
              },
            }}
          >
            {selectedItem}
          </Grid>
          <Grid xs={3} md={1} className={styles.destination}>
            To
          </Grid>
          <Grid
            xs={3}
            md={1}
            className={styles.destination}
            sx={{
              borderLeft: { md: "1px solid white" },
              borderTop: { xs: "1px solid white", md: "none" },
            }}
          >
            {destination}
          </Grid>
          <Grid
            xs={3}
            sx={{
              borderTop: "1px solid white",
              paddingTop: {
                md: "40px",
              },
              paddingBottom: {
                md: "40px",
              },
            }}
          >
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
      )}
      {tipOff && (
        <Grid container disableEqualOverflow columns={1} sx={{ width: "100%" }}>
          <Grid
            xs={1}
            md={1}
            className={styles.destination}
            sx={{
              borderBottom: { xs: "1px solid white" },
              paddingTop: {
                md: "40px",
              },
              paddingBottom: {
                md: "40px",
              },
            }}
          >
            {selectedItem}
          </Grid>
          <Grid
            xs={1}
            className={styles.destination}
            sx={{
              paddingTop: {
                md: "60px",
              },
              paddingBottom: {
                md: "60px",
              },
            }}
          >
            Tip Off
          </Grid>
        </Grid>
      )}
    </Button>
  );
};

export default Counter;
