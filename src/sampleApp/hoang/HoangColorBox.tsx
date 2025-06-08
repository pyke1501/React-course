import React, { useState } from "react";

function App() {
  const defaultBlocks = [
    { color: "red", label: "Red" },
    { color: "gold", label: "Gold" },
    { color: "aqua", label: "Aqua" },
    { color: "purple", label: "Purple" },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <div style={styles.container}>
      {defaultBlocks.map((block, index) => {
        const displayColor = selectedColor ? selectedColor : block.color;

        return (
          <div
            key={index}
            onClick={() => handleClick(block.color)}
            style={{
              ...styles.block,
              backgroundColor: displayColor,
            }}
          >
            <span style={styles.label}>{block.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ✅ CSS
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 120px)",
    gap: "10px",
    justifyContent: "center",
    marginTop: "50px",
  },
  block: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",            
    alignItems: "center",
    justifyContent: "center",
    color: "white",             
    fontWeight: "bold",
    fontSize: "16px",
  },
  label: {
    pointerEvents: "none",// để không ảnh hưởng khi click vào chữ
  },
};

export default App;
