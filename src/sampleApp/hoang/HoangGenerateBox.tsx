import { useState } from 'react';
import './box.css'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function HoangGenerateBox({ boxColor }: any) {
  const [numBoxes, setNumBoxes] = useState(0);
  const [boxes, setBoxes] = useState<{ id: number; color: string }[]>([]);

  const handleGenerate = () => {
    const number = numBoxes;
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

  const toggleColor = (boxId: number) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === boxId ? { ...box, color: getRandomColor() } : box
      )
    );
    // find index, em thay đổi thuộc tính của index đó. index = 1; boxes[1].color = ???
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
          onChange={(e) => setNumBoxes(parseInt(e.target.value))}
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
      </label>
      <button onClick={handleGenerate}>Generate</button>

      <div className="container">
        {boxes.length === 0 ? (
          <p>No box</p>
        ) : (
          boxes.map((box) => (
            <div
              key={box.id}
              className="box"
              style={{ backgroundColor: boxColor }}
              onClick={() => toggleColor(box.id)}
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