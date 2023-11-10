import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Unstable_Grid2 as Grid,
  Container,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import styles from "./style.module.css";

const Mtrack = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [destination, setDestination] = useState(null);
  const [counter, setCounter] = useState(null);
  const [otherDestination, setOtherDestination] = useState(null);
  const items = [
    "3 mm",
    "FINE DUST",
    "SLURRY DUST",
    "6 mm",
    "10 mm",
    "14 mm",
    "20 mm",
    "28 mm",
    "40 mm",
    "RAIL BALLAST",
    "6 mm BEST",
    "10 mm BEST",
    "14 mm BEST",
    "20 mm BEST",
    "TYPE 1",
    "TYPE 3",
    "BLEND 66",
    "BLEND 20/5",
    "FORMPAVE",
    "75/40",
    "OVERSIZED",
    "ROAD BLEND",
    "WASHED GRANIT SAND",
    "GF5",
    "6 mm SURFACE DRESSING",
    "10 mm SURFACE DRESSING",
    "",
    "",
  ];

  const destinationItems = [
    "STOCK",
    "BENNY",
    "WASHPLANT",
    "ST HEAVENS",
    "EXTENSION",
    "OTHER",
  ];

  const stopCounter = () => {
    setCounter(null);
    setSelectedItem(null);
    setDestination(null);
  };
  const startCounter = (destination) => {
    if (destination === "OTHER") {
      setOtherDestination(destination);
    } else {
      setDestinationAndStartCounter(destination);
    }
  };
  const setDestinationAndStartCounter = (destination) => {
    setOtherDestination(null);
    setDestination(destination);
    setCounter(0);
  };
  const selectItem = (item) => {
    if (item === "") {
      return;
    }
    setSelectedItem(item);
  };

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
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MTrack
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "10px" }}>
        {!selectedItem && (
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
        )}

        {otherDestination && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <TextField
              id="outlined-basic"
              label={otherDestination}
              variant="outlined"
              onChange={(event) => setOtherDestination(event.target.value)}
            />
            <Button
              sx={{ height: "100%", marginLeft: "15px" }}
              variant="contained"
              color="success"
              size="large"
              onClick={() => setDestinationAndStartCounter(otherDestination)}
            >
              Set Destination
            </Button>
          </Box>
        )}

        {selectedItem && !destination && !otherDestination && (
          <Grid container spacing={2} disableEqualOverflow columns={3}>
            <Grid xs={3}>
              <div className={styles.selectedItem}>{selectedItem}</div>
            </Grid>
            {destinationItems.map((item, index) => (
              <Grid xs={1} key={index}>
                <Button
                  fullWidth
                  sx={{ height: "100%" }}
                  variant="contained"
                  color="success"
                  onClick={() => startCounter(item)}
                >
                  {item}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}

        {selectedItem && destination && !otherDestination && (
          <Button
            fullWidth
            variant="contained"
            onClick={stopCounter}
            color="success"
          >
            <Grid
              container
              disableEqualOverflow
              columns={3}
              sx={{ width: "100%" }}
            >
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
                {counter !== null && (
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
                )}
              </Grid>
            </Grid>
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default Mtrack;
