import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 Not Found ,
      <NavLink to="/" replace>
        go back
      </NavLink>
    </div>
  );
};
export default NotFound;
