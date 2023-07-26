import React, { Component } from "react";

const loanProducts = [
  {
    key: "new",
    name: "первичка",
  },
  { key: "used", name: "вторичка" },
];

const loanSubProducts = [
  {
    subProductId: "1",
    subProductName: "property",
    name: "недвижимость",
    properties: {
      terms: [6, 12, 24, 36, 48],
    },
  },
  {
    subProductId: "2",
    subProductName: "transport",
    name: "транспорт",
    properties: {
      terms: [6, 12, 24, 36, 48],
    },
  },
];
class LoanForm extends Component {
  state = {
    price: "",
    product: loanProducts[0].key,
    subProduct: loanSubProducts[0].subProductName,
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { price } = this.state;
    return (
      <form>
        <label>
          Цена
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.onHandleChange}
            placeholder="Введите Вашу цену"
          />
        </label>
        {/*=============== checkBox ================*/}
        Продукты
        {loanProducts.map(({ key, name }) => (
          <label key={key}>
            <input type="radio" value={key} />
          </label>
        ))}
        <label>
          Субпродукт
          <select onChange={this.onHandleChange} name="subProduct">
            {loanProducts.map(({ subProductId, subProductName, name }) => (
              <option key={subProductId} value={subProductName}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default LoanForm;
