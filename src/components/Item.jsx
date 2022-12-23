import "../styles/item.css";

const Item = ({ title, desc, logo }) => {
  console.log(title, desc, logo);

  return (
    <div className="item">
      <img className="icon" src={logo} alt="" />
      <div className="main">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Item;
