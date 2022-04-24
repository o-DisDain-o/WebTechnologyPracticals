import React from "react";
import {useHistory} from "react-router-dom";
import EventNoteIcon from "@material-ui/icons/EventNote";

function Header() {
  const history = useHistory();
  const navigateTo = () => history.push('/');
  return (
    <header>
      <h1>
        <EventNoteIcon />
        <span> Keeper</span>
      </h1>
      <button className="headerbutton"onClick={navigateTo} > Log out </button>
    </header>
  );
}


export default Header;
