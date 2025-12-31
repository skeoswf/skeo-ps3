function LoadSecondXMB({ iconObj }) {
  if (!iconObj?.active) return null;

  return (
    <div className="sub-icon">
      {iconObj.items.map(item => (
        <div key={item.id} className={`sub-item ${item.active ? "active-sub-item" : ""}`}>
          <span className="sub-context-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default LoadSecondXMB;
