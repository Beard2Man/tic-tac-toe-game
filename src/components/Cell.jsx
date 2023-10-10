const Cell = ({ id, go, setGo, cell, cells, setCells, winningMessage }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleChellange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleChellange("cross");
        setGo("circle");
      }
    }
  };

  const handleChellange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};
export default Cell;
