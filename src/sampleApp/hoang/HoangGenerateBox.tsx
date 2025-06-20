import React, { useState } from 'react';
import './box.css'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function HoangGenerateBox() {
  const [numBoxes, setNumBoxes] = useState('');
  const [boxes, setBoxes] = useState<{ id: number; color: string }[]>([]);

  const handleGenerate = () => {
    const number = parseInt(numBoxes);
    if (!number || number < 1 || number > 128) {
      setBoxes([]); // nếu sai, xóa hết box đi
      return;
    }
    const newBoxes = Array.from({ length: number }, (_, i) => ({
      id: i + 1,
      color: 'antiquewhite',
    }));
    setBoxes(newBoxes);
  };

  const toggleColor = (index) => {
    setBoxes((prev) =>
      prev.map((box, i) =>
        i === index ? { ...box, color: getRandomColor() } : box
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <style>
        {`
          .container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            gap: 10px;
          }
          .box {
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>

      <h2 style={{fontFamily: 'sans-serif'}}>HoangNV Sample App - GenerateBox</h2>
      <label>
        Number of boxes:
        <input
          type="number"
          min="1"
          max="128"
          value={numBoxes}
          onChange={(e) => setNumBoxes(e.target.value)}
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
      </label>
      <button onClick={handleGenerate}>Generate</button>

      <div className="container">
        {boxes.length === 0 ? (
          <p>No box</p>
        ) : (
          boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: box.color }}
              onClick={() => toggleColor(index)}
            >
              box #{box.id}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HoangGenerateBox;