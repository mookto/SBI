import React, { useState } from "react";
import { TYPEOFONBOARDING } from "./riskgrading";

function Checking(props) {
  const [typeofonboarding, settypeofonboarding] = useState();
  let x = [];
  const makeOptions = Object.keys(props.type).forEach(function (key) {
    var value = props.type[key];
    //console.log("value", value);
    settypeofonboarding({ name: key, value: value.value });
    if (value.value !== undefined && typeof value.value !== Object) {
      x.push(
        <option
          key={value.title + "" + value.value}
          title={value.title}
          value={value.value}
        >
          {value.title}
        </option>
      );
    } else {
    }
  });

  // console.log("makeoptions", x);

  return (
    <div>
      <label for="male">props.question</label>
      <select
        //title="Type of On-boarding"
        onChange={(e) => {
          settypeofonboarding({ name: "", value: e.target.value });
          props.setVal({ name: "", value: e.target.value });
        }}
      >
        {x}
      </select>
      <input
        type="text"
        value={typeofonboarding !== undefined ? typeofonboarding.value : ""}
        name={typeofonboarding !== undefined ? typeofonboarding.title : ""}
      />
    </div>
  );
}

export default Checking;
