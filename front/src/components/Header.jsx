import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex flex-row">
      <p className="text-3xl">travelaja</p>
      <div>
        <Link to="/">Landing</Link>
        <Link to="/Home">Home</Link>
        <Link to="/CompanyInfo">CompanyInfo</Link>
        <Link to="/Hutulbur">Hutulbur</Link>
      </div>
      <div>
        <button>Log out</button>
        <button>Username</button>
      </div>
    </div>
  );
};

export default Header;
