import React from "react";
import { List, Image } from "semantic-ui-react";

function UserList(e) {
  return (
    <List divided verticalAlign="middle" className="list__style">
      {e.info.map((user) => ({
        ...(user.name.length === 0 ? (
          <List.Item>
            <List.Content>
              <List.Header as="a"></List.Header>
            </List.Content>
          </List.Item>
        ) : (
          <List.Item>
            {user.gender === "male" ? (
              <Image avatar src={require("../images/male.jpg")} />
            ) : (
              <Image avatar src={require("../images/female.jpg")} />
            )}

            <List.Content>
              <List.Header as="a">
                {user.name} ({user.age})
              </List.Header>
            </List.Content>
          </List.Item>
        )),
      }))}
    </List>
  );
}
export default UserList;

// { e.info.map((user) => (
//     <div>
//       {user.name ? (
//         <h2>
//           Hello this {user.name} and my age is {user.age}.
//         </h2>
//       ) : (
//         ""
//       )}
//   ))}
