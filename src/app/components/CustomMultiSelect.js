import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MultiSelect from "react-multi-select-component";
import "./styles.css";

export default function CustomMultiSelect(props) {
  const [selected, setSelected] = useState([]);
  console.log("props", props);
  useEffect(() => {
    console.log("Selcted", selected);
    props.parentCall(selected);
    console.log("Selected 2", selected);
  }, [selected]);
  return (
    <div>
      {/* <h1></h1>
      <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={props.options}
        selected={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
}
