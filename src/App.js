import "./index.css";
import UserForm from "./components/UserForm";
import React, { useState } from "react";
import UserList from "./components/UserList";
import uuid from "react-uuid";
import { Grid } from "semantic-ui-react";

function App() {
  const [userInfoData, setUserInfoData] = useState([
    { id: uuid().toString(), name: "", age: "", gender: "" },
  ]);
  const userDataHandler = (info) => {
    const saveData = {
      ...info,
      id: uuid().toString(),
    };
    setUserInfoData((previousData) => {
      return [saveData, ...previousData];
    });
  };
  console.log(userInfoData);
  return (
    <Grid centered columns={2} className="main__grid">
      <Grid.Column>
        <UserForm userData={userDataHandler} />
        <UserList info={userInfoData} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
