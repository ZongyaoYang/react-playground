import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({ mousePosition });
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  //   return (
  //     <div className="BasicTracker">
  //       <p>Mouse position:</p>
  //       <div className="Row">
  //         <span>x: {mousePosition.x}</span>
  //         <span>y: {mousePosition.y}</span>
  //       </div>
  //     </div>
  //   );

  return (
    <div
      style={{
        border: "solid black 1px",
        padding: "20px",
        display: "inline-block",
      }}
    >
      <p>Mouse Position: </p>
      <MousePosition
        render={({ mousePosition }) => {
          return (
            <div>
              x: {mousePosition.x} y: {mousePosition.y}
            </div>
          );
        }}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          {mousePosition.x}, {mousePosition.y}
        </p>
      )}
    />
  );
};

function MouseTracking() {
  return (
    <div className="App">
      <h1 style={{padding: '20px'}}>This is Mouse Tracking App</h1>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default MouseTracking;
