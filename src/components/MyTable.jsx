import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../actions/userAction";
import { showMsg } from "../actions/messageAction";
import { Table, Button } from "react-bootstrap";

const MyTable = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state);

  const deleteRow = (user) => {
    const msg = `User: ${user.name}, age: ${user.age} is deleted.`;
    dispatch(deleteUser(user.id));
    dispatch(showMsg(msg));
  };
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      deleteRow(user);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyTable;
