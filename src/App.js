import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import StepperForm from "./components/stepper/StepperForm";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {start ? (
        <StepperForm />
      ) : (
        <div className="startPoint">
          <h2>👋 Holà 👋</h2>
          <h1>🚧👷‍♂️ Testing new feature 👷‍♂️🚧</h1>
          <Button
            onClick={() => {
              setStart(true);
            }}
            variant="contained"
            color="success"
          >
            Start !
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
