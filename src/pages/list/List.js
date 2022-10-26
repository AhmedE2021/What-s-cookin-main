import NavBar from "../../components/NavBar";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ShoppingListPage from "./Pages/ShoppingList";
import StockListPage from "./Pages/StockList";

export default function List() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      <div>
        <nav className="shopping-list-small-navbar">
          <div className="shopping-list-navbar">
            <input type="text" className="shopping-list-search" id="slSearch" />
            <Tabs
              className="shopping-list-navbar-links-holder"
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
                ".MuiTabs-flexContainer": {
                  backgroundColor: "#ca336a",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "50px",
                  paddingRigh: "50px",
                  marginTop: "50px",
                },
                "& button": {
                  width: "60%",
                  color: "#f1f1f1",
                  fontSize: "18pt",
                  fontFamily: "nunito-regular",
                  textAlign: "center",
                },
                "& button:active": {
                  color: "white",
                },
                "& button. Mui-selected .css-1h9z7r5-MuiButtonBase-root-MuiTab-roo":
                  {
                    color: "red",
                  },
              }}
            >
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
            </Tabs>
          </div>
        </nav>
        {currentTab === 0 && <ShoppingListPage />}
        {currentTab === 1 && <StockListPage />}
        <NavBar />
      </div>
    </>
  );
}
