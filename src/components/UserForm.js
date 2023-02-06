import React, { useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";
import "../index.css";

const genderOptions = [
  { key: "male", value: "male", text: "Male" },
  { key: "female", value: "female", text: "Female" },
];
function UserForm(data) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);

  const userNameHandler = (e) => {
    if (e.target.value.trim().length > 0) setIsNameValid(true);
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    if (e.target.value.trim().length > 0) setIsAgeValid(true);
    setUserAge(e.target.value);
  };
  const userGenderHandler = (e, db) => {
    if (e.target.value === "male" || e.target.value === "female")
      setIsGenderValid(true);
    setUserGender(db.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const saveData = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
      gender: userGender,
    };
    let isAllInfoCorrect = true;
    if (userName.trim().length === 0) {
      setIsNameValid(false);
      isAllInfoCorrect = false;
    }
    if (userAge.trim().length === 0) {
      setIsNameValid(false);
      isAllInfoCorrect = false;
    }
    if (!(userGender === "male" || userGender === "female")) {
      setIsNameValid(false);
      isAllInfoCorrect = false;
    }
    if (isAllInfoCorrect) {
      data.userData(saveData);
      setUserName("");
      setUserAge("");
      setUserGender("");
    }
  };
  return (
    <Form onSubmit={onSubmitHandler} className="form__style">
      <Form.Field>
        <input
          placeholder="Full Name"
          value={userName}
          onChange={userNameHandler}
        />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field>
          <input
            placeholder="Your Age"
            type="number"
            value={userAge}
            onChange={userAgeHandler}
          />
        </Form.Field>
        <Form.Field>
          <Select
            placeholder="Select Gender"
            options={genderOptions}
            selection
            onChange={userGenderHandler}
          />
        </Form.Field>
      </Form.Group>
      <Button type="submit" positive>
        Submit
      </Button>
    </Form>
  );
}
export default UserForm;
