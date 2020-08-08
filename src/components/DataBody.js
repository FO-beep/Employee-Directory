import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, picture, name, phone, email }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={name.first + "" + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="align-middle">
                {name.first} {name.last}
              </td>

              <td data-th="Phone" className="align-middle">
                {phone}
              </td>

              <td data-th="Email" className="align-middle">
                {email}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;
