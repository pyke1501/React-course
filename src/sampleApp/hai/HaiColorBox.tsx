import React from "react";

function HaiBoxColor({ boxColor, updateBoxColor }: any) {
  const colors = ["red", "yellow", "aqua", "purple"];

  return (
    <>
      <h2>Hai Color Box:</h2>
      Current color: {boxColor.currentColor}
      <div className="boxColor">
        {colors.map((color) => (
          <div
            key={color}
            className={color}
            style={{
              backgroundColor:
                boxColor === "Default"
                  ? color
                  : boxColor,
            }}
            onClick={() => updateBoxColor(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </>
  );
}

export default HaiBoxColor;
