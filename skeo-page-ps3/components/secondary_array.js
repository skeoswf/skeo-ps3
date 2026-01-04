function LoadSecondXMB({ iconObj }) {
  if (!iconObj?.active) return null;

  const activeIdx = iconObj.items.findIndex((item) => item.active);

  const aboveItems = activeIdx > 0 ? iconObj.items.slice(0, activeIdx) : [];
  const restItems = activeIdx >= 0 ? iconObj.items.slice(activeIdx) : iconObj.items;

  return (
    <div className="sub-icon">
      <div className="sub-above">
        {aboveItems.map((item) => (
          <div key={item.id} className="sub-item above-active">
            <span className="sub-context-text">{item.title}</span>
          </div>
        ))}
      </div>

      <div className="sub-main">
        {restItems.map((item) => (
          <div
            key={item.id}
            className={`sub-item ${item.active ? "active-sub-item" : ""}`}
          >
            <span className="sub-context-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadSecondXMB;
