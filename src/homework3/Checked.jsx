import React from "react";

export const Item = (props) => {
  const { checked, name, active, onRemove, id } = props;
  return (
    <li className={checked ? "chk" : "unchk"}>
      {name}
      {active && <input type="checkbox" onChange={checked} />}
      {active && (
        <button className="delete" onClick={() => onRemove(id)}>
          X
        </button>
      )}
    </li>
  );
};
