import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return(
    <section className="Menu">
      {props.children}
    </section>
  );
}

export default Menu;