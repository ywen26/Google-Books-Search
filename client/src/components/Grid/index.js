import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container
export function Container(props) {
    return <div className="container" style={props.style}>{props.children}</div>;
}

// This Row component lets us use a bootstrap row
export function Row(props) {
    return <div className="row">{props.children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
export function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return <div className={size}>{props.children}</div>;
}