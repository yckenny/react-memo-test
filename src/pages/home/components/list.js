import Item from "./item";

const List = ({ listData, removeData }) => {
  console.log("listData", listData);
  return (
    <div className="record-container">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            removeData={removeData}
          />
        );
      })}
    </div>
  );
};

export default List;
