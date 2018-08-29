import React from "react";

function List(props) {
  let items = [];
  Object.keys(props.ingredients).map(key => {
    let count = props.ingredients[key];
    let newItems = [];
    for (let i = 0; i < count; i++) {
      newItems.push(i);
    }
    let classNam = "";
    switch (key) {
      case "Meat":
        classNam = "BurgerIngredient__Meat";
        break;
      case "Cheese":
        classNam = "BurgerIngredient__Cheese";
        break;
      case "Bacon":
        classNam = "BurgerIngredient__Bacon";
        break;
      default:
        classNam = "BurgerIngredient__Salad";
    }
    newItems.map((item, index) => {
      items.push(<div className={classNam} key={key + index} />);
    });
  });
  if (items.length == 0) {
    items.push(<p> Please add some ingredients </p>);
  }
  return items;
}
export default class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
  }
  createBgIncredient(count) {}

  render() {
    return (
      <div className="Burger__Burger">
        <div className="BurgerIngredient__BreadTop" />
        <List ingredients={this.props.ingredients} />
        <div className="BurgerIngredient__BreadBottom" />
      </div>
    );
  }
}
