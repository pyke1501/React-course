import React from "react";

function HaiBoxColor() {
  const [boxColor, setBoxColor] = React.useState({
    currentColor: "Default",
  });

  const colors = ["red", "yellow", "aqua", "purple"];

  function updateBoxColor(e) {
    const selectedColor = e.currentTarget.className;

    setBoxColor((prevState) => {
      return {
        currentColor:
          prevState.currentColor === selectedColor ? "Default" : selectedColor,
      };
    });
  }

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
                boxColor.currentColor === "Default"
                  ? color
                  : boxColor.currentColor,
            }}
            onClick={updateBoxColor}
          >
            {color}
          </div>
        ))}
      </div>
    </>
  );
}

export default HaiBoxColor;
