import React from "react";
import Title from "../common/title/Title";

const Users = () => {
  return (
    <div>
      <Title title="All Users" />
      <div className="allConversion">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Role</th>
            <th>Approval</th>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>12324</td>
            <td>admin</td>
            <td>
              <button className="btn-primary">Approve</button>
            </td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>12324</td>
            <td>admin</td>
            <td className="text-green">Approved</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>12324</td>
            <td>admin</td>
            <td>
              <button className="btn-primary">Approve</button>
            </td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>12324</td>
            <td>admin</td>
            <td>
              <button className="btn-primary">Approve</button>
            </td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>12324</td>
            <td>admin</td>
            <td>
              <button className="btn-primary">Approve</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="btn-disable">Previous</button>
            </td>
            <td className="text-center">
              <button className="btn-secondary">1</button>
            </td>
            <td colSpan={2} className="text-right">
              <button className="btn-disable">Next</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Users;
