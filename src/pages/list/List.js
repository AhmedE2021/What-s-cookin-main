import NavBar from "../../components/NavBar";
import SLNavBar from "./components/SLnavBar";
import { Tab, Tabs } from "@mui/material";
import List2 from "./List2";
import { useState } from "react";

export default function List() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <div>
        <Tabs value={currentTab} onClick={handleTab}>
          <Tab label="Tab 1"></Tab>
          <Tab label="Tab 2"></Tab>
        </Tabs>
        <h1> List Page</h1>
        <SLNavBar />
        <List2 />
        <NavBar />
      </div>
    </>
  );
}
