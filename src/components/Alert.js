import React from "react";

function Alert(props) {
    const PascalCase=(word)=>{
        let word1=word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return word1;
    };
  return (
    props.alert && <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{PascalCase(props.alert.type)}!!! </strong>
        {
            props.alert.msg
        }

      </div>
    </div>
  );
}

export default Alert;
