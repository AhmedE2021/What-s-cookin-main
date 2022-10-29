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
      <Tabs value={currentTab} onChange={handleTab}>
        <Tab label="Ingredients" />
        <Tab label="Instructions" />
      </Tabs>
      {currentTab === 0 && <IngredientsTab />}
      {currentTab === 1 && <InstructionsTab />}
    </>
  );
}
