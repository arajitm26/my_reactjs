import { Outlet, Link } from "react-router-dom";


const AdminLayout = () => {
  return (
    <>
      <h1>admin header</h1>
      <Outlet />
      <h2>admin footer</h2>
      
    </>
  )
};

export default AdminLayout;