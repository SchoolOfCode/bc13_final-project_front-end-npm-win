import React from "react";

export default function Menuitem({ children, ...props }) {
  const listItemsProps = {
    ...props,
    "data-menubar-listitem": "",
    role: "none",
  };
  const childProps = {
    "data-menubar-menuitem": "",
    role: "menuitem",
  };

  return (
    <li {...listItemsProps}>{React.cloneElement(children, childProps)}</li>
  );
}
