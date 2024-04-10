import React, { useState } from "react";
import { Resizable } from "re-resizable";

export default function App() {
  const initialBoxes = [
    { width: "50%", height: 200 },
    { width: "50%", height: 200 },
    { width: "100%", height: 200 },
  ];

  const [boxes, setBoxes] = useState(initialBoxes);

  const handleResize = (index, delta) => {
    const newBoxes = [...boxes];
    newBoxes[index] = {
      width: parseInt(newBoxes[index].width) + delta.width,
      height: newBoxes[index].height + delta.height,
    };

    // Calculate the total width change
    const totalWidthChange = delta.width;

    // If resizing box 3, distribute the change to both box 1 and box 2
    if (index === 2) {
      newBoxes[0] = {
        ...newBoxes[0],
        width: parseInt(newBoxes[0].width) + totalWidthChange / 2,
      };
      newBoxes[1] = {
        ...newBoxes[1],
        width: parseInt(newBoxes[1].width) + totalWidthChange / 2,
      };
    }

    setBoxes(newBoxes);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Resizable
          style={{
            margin: "10px",
            border: "1px solid black",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          size={{ width: boxes[0].width, height: boxes[0].height }}
          onResizeStop={(e, direction, ref, delta) =>
            handleResize(0, direction, ref, delta)
          }
        >
          Box 1 (Top)
        </Resizable>
        <Resizable
          style={{
            margin: "10px",
            border: "1px solid black",
            backgroundColor: "lightgreen",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          size={{ width: boxes[1].width, height: boxes[1].height }}
          onResizeStop={(e, direction, ref, delta) =>
            handleResize(1, direction, ref, delta)
          }
        >
          Box 2 (Top)
        </Resizable>
      </div>
      <Resizable
        style={{
          margin: "10px",
          border: "1px solid black",
          backgroundColor: "lightcoral",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={{ width: boxes[2].width, height: boxes[2].height }}
        onResizeStop={(e, direction, ref, delta) =>
          handleResize(2, direction, ref, delta)
        }
      >
        Box 3 (Bottom)
      </Resizable>
    </div>
  );
}
