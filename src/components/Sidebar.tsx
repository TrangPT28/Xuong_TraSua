import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Dashboard</h2>
      </div>
      <div className="sidebar__content">
        <ul>
          <li>
            <Link to="">Dashboard</Link>
          </li>
          <li>
            <Link to="">Products</Link>
          </li>
          <li>
            <Link to="">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;