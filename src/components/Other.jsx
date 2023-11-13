import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

const Other = ({ setOther, material }) => {
  const [currentOther, setCurrentOther] = useState("Other");
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField
        id="outlined-basic"
        label="Other"
        variant="outlined"
        onChange={(event) => setCurrentOther(event.target.value)}
      />
      <Button
        sx={{ height: "100%", marginLeft: "15px" }}
        variant="contained"
        color="success"
        size="large"
        onClick={() => setOther(currentOther)}
      >
        {`Set ${material ? "Destination" : "Material"}`}
      </Button>
    </Box>
  );
};

export default Other;
