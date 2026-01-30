function LoadSecondXMB({ iconObj, mode = "below", activeItemRef, onSubClick }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  const aboveItems = iconObj.items
    .slice(0, activeIdx)
    .map((item, originalIndex) => ({ item, index: originalIndex }));
  const belowItems = iconObj.items
    .slice(activeIdx)
    .map((item, offset) => ({ item, index: activeIdx + offset })); // includes active + below

  // ABOVE container should ONLY show items above the active
  if (mode === "above") {
    if (aboveItems.length === 0) return null;

    return (
      <div className="sub-icon">
        {aboveItems.map(({ item, index }) => (
          <div
            key={item.id}
            className="sub-item above-active"
            onClick={() => onSubClick?.(index)}
            role="button"
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <span className="sub-context-text">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }

  // BELOW container should ONLY show active + items below it
  return (
    <div className="sub-icon">
      {belowItems.map(({ item, index }) => (
        <div
          key={item.id}
          ref={item.active ? activeItemRef : null}
          className={`sub-item ${item.active ? "active-sub-item" : ""}`}
          onClick={() => onSubClick?.(index)}
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
        >
          <span className="sub-context-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default LoadSecondXMB;
