import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Films.css';

const Films = ({ films }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Films
        </DropdownToggle>
      <DropdownMenu>
        {films.map(film =>
          <DropdownItem key={film}>{film}</DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Films;