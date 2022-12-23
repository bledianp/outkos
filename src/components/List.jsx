import { data } from "../data";
import "../styles/list.css";
import Item from "./Item";

console.log(data);
const List = () => {
  return (
    <div className="list">
      {data.map((dat) => (
        <Item
          key={dat.id}
          title={dat.title}
          desc={dat.description}
          logo={dat.logo}
        />
      ))}
    </div>
  );
};

export default List;
