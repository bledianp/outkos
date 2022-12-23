import "../styles/card.css";

const Card = ({ version, date, button, name, text, color }) => {
  //   console.log(version, date, button, name, text, color);

  return (
    <div className="card">
      <h4>
        {version} - ({date})
      </h4>
      <div className="second-div">
        <button className="newButton" style={{ backgroundColor: color }}>
          {button}
        </button>

        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/32.jpg"
          style={{ marginRight: "5px" }}
        />
        <p>{name}</p>
      </div>
      <p className="text">{text}</p>

      <button className="downloadButton">Download</button>
    </div>
  );
};

export default Card;
