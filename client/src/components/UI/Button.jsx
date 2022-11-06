import React from 'react';

const Button = (props) => {
  return <button type={props.type || "button"} aria-label="button" className={props.className} onClick={props.onClick}>{props.children}</button>;
};
export default React.memo(Button);
