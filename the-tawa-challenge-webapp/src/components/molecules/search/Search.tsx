import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import PropTypes from "prop-types";
import { SearchInput } from "../../atoms/input/Input";
import { useNavigate } from "react-router-dom";

require("./Search.css");

export const NavbarSearch = (props: {}) => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    navigate(`/dashboard/search/${searchKey}`);
    setSearchKey("");
  };
  return (
    <div className="navbar_search">
      <SearchInput
        type="search"
        placeholder="Find something..."
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyDown={handleKeyDown}
      ></SearchInput>
    </div>
  );
};
NavbarSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
