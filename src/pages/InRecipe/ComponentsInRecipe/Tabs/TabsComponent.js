import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import IngredientsTab from "./InTabComponents/IngredientsTab";
import InstructionsTab from "./InTabComponents/InstructonsTab";

export default function TabsComponent() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleTab}
        TabIndicatorProps={{
          sx: {
            color: "#f1f1f1",
            backgroundColor: "#FCEC3B",
            height: "5px",
          },
        }}
        sx={{
          "& button": {
            color: "#000000",
            fontSize: "15pt",
            fontFamily: "nunito-regular",
            textAlign: "center",
          },
        }}
      >
        <Tab label="Ingredients" />
        <Tab label="Instructions" />
      </Tabs>
      {currentTab === 0 && <IngredientsTab />}
      {currentTab === 1 && <InstructionsTab />}
    </>
  );
}
