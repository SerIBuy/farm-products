import React from "react";
import './Title.css';

export default function Title({children, size}) {
    return <h1 className={`title${size ? `title_${size}` : ""}`}>{children}</h1>
}