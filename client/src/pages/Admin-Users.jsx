import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminUSers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (err) {
      console.log("error from admin user", err);
    }
  };

  //this is delete user code
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after deletion ;${data}`);
      if (response.ok) {
        getAllUsersData();
        toast.success("Deleted Succesfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="mainHeading">
          <h1>User data of Registered Students</h1>
        </div>
        <div className="container-admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                      <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button className="deleteButton" onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
