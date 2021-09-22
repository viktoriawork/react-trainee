import React from "react";

const PhoneListItem = ({ phone }) => {
  return (
    <li>
      <h3>{phone.name}</h3>
      <img src={phone.image} alt={phone.name} />
      <p>
        Sale:{" "}
        {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{phone.description}</p>
      <ul>
        {phone.colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>
        Цена: <span>{phone.price}</span>
      </p>
    </li>
  );
};

export default PhoneListItem;
