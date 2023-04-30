import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  const { error, name, label, errorMessage } = props;

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        error={error || errorMessage}
        label={label}
        id={name}
      />
      {errorMessage && (
        <p className="text-red-600 px-2 text-sm font-mono">
          <span>* </span>
          {errorMessage}
        </p>
      )}
    </Box>
  );
}
