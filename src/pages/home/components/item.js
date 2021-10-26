const Item = ({ id, note, date, time, removeData }) => {
  function removeItem() {
    removeData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
