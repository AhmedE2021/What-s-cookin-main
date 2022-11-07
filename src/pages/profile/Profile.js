import NavBar from "../../components/NavBar";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import SavedRecipes from "./components/SavedRecipes";
import MyRecipes from "./components/MyRecipes";

export default function Profile() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <div className="prof-pic-holder">
        <img
          className="profile-pic"
          src="https://pbs.twimg.com/media/D962rdaUEAA-KFG.jpg"
          alt="example"
        />
        <h3 className="inProfile-user-name">Jessica Johnsen</h3>
      </div>
      <div>
        <nav className="profile-small-navbar">
          <div className="profile-navbar">
            <Tabs
              className="profile-navbar-links-holder"
              value={currentTab}
              onChange={handleTab}
              TabIndicatorProps={{
                sx: {
                  color: "#f1f1f1",
                  backgroundColor: "FCEC3B",
                  height: "5px",
                },
              }}
              sx={{
                "& button": {
                  width: "70%",
                  color: "#f1f1f1",
                  fontSize: "17pt",
                  fontFamily: "nunito-regular",
                  textAlign: "center",
                },
              }}
            >
              <Tab className="tab-profile" label="Saved recipes" />
              <Tab className="tab-profile" label="My recipes" />
            </Tabs>
          </div>
        </nav>
        {currentTab === 0 && <SavedRecipes />}
        {currentTab === 1 && <MyRecipes />}

        <NavBar />
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}
