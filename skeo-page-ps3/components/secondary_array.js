function LoadSecondXMB({ iconObj, mode = "below", activeItemRef }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);
  if (activeIdx === -1) return null;

  const aboveItems = activeIdx > 0 ? iconObj.items.slice(0, activeIdx) : [];
  const belowItems = iconObj.items.slice(activeIdx); // includes active + below

  // ABOVE container should ONLY show items above the active
  if (mode === "above") {
    if (aboveItems.length === 0) return null;
    return (
      <div className="sub-icon">
        {aboveItems.map((item) => (
          <div key={item.id} className="sub-item above-active">
            <span className="sub-context-text">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }

  // BELOW container should ONLY show active + items below it
  return (
    <div className="sub-icon">
      {belowItems.map((item) => (
        <div
          key={item.id}
          ref={item.active ? activeItemRef : null}
          className={`sub-item ${item.active ? "active-sub-item" : ""}`}
        >
          <span className="sub-context-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default LoadSecondXMB;
