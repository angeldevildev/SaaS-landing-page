import React from "react";

export default function Button({ text, backColor, color, bold, top, left }) {
  return (
    <div>
      <button
        style={{
          width: 160,
          height: 60,
          flexShrink: 0,
          borderRadius: 150,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: bold ? 'bold' : 'normal',
          textTransform: "capitalize",
          backgroundColor: backColor,
          color: color,
          fontFamily: 'Satoshi Bold',
          marginTop: top,
          marginLeft: left,
        }}
      >
        {text}
      </button>
    </div>
  );
}