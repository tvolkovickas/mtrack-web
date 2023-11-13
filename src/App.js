import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Materials from "./components/Materials";
import Other from "./components/Other";
import Counter from "./components/Counter";
import Destination from "./components/Destination";

const STAGES = {
  MATERIALS: "MATERIALS",
  DESTINATION: "DESTINATION",
  OTHER: "OTHER",
  TIMER: "TIMER",
};

const Mtrack = () => {
  const [material, setMaterial] = useState(null);
  const [destination, setDestination] = useState(null);
  const [currentStage, setCurrentStage] = useState(STAGES.MATERIALS);

  const stopCounter = () => {
    setMaterial(null);
    setDestination(null);
    setCurrentStage(STAGES.MATERIALS);
  };

  const setOther = (other) => {
    if (material === null) {
      setMaterial(other);
      setCurrentStage(STAGES.DESTINATION);
    } else {
      setDestination(other);
      setCurrentStage(STAGES.TIMER);
    }
  };

  const startCounter = (destination) => {
    if (destination === "OTHER") {
      setCurrentStage(STAGES.OTHER);
    } else {
      setDestination(destination);
      setCurrentStage(STAGES.TIMER);
    }
  };

  const selectItem = (item) => {
    if (item === "") {
      return;
    }
    if (item === "OTHER") {
      setCurrentStage(STAGES.OTHER);
      return;
    }
    setMaterial(item);
    setCurrentStage(STAGES.DESTINATION);
  };

  const goBack = () => {
    setMaterial(null);
    setDestination(null);
    setCurrentStage(STAGES.MATERIALS);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {currentStage !== STAGES.MATERIALS &&
            currentStage !== STAGES.TIMER && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={goBack}
              >
                <ArrowBackIcon />
              </IconButton>
            )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MTrack
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "10px" }}>
        {currentStage === STAGES.MATERIALS && (
          <Materials selectItem={selectItem} />
        )}

        {currentStage === STAGES.OTHER && (
          <Other setOther={setOther} material={material} />
        )}

        {currentStage === STAGES.DESTINATION && (
          <Destination selectedItem={material} startCounter={startCounter} />
        )}

        {currentStage === STAGES.TIMER && (
          <Counter
            selectedItem={material}
            destination={destination}
            stopCounter={stopCounter}
          />
        )}
      </Container>
    </Box>
  );
};

export default Mtrack;
