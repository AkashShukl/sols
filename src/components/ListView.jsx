import React from "react";

export default function ListView(props) {
  let startValue = props.start ? Number(props.start) : 1;
  let endValue = props.end ? Number(props.end) : 10;

  const genList = () => {
    let items = [];
    for (let i = startValue; i <= endValue; i++) {
      items.push(i);
    }
    return items.map((index) => <li key={index}> {index} </li>);
  };
  return (
    <div>
      <ul>{genList()}</ul>
    </div>
  );
}
