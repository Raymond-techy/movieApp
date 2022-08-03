import React, { Component } from "react";

class FilterTab extends Component {
  render() {
    const { items, onItemSelect, textProperty, itemProperty, selectedItem } =
      this.props;
    return (
      <ul className="list-group">
        {items.map((tab) => (
          <li
            onClick={() => onItemSelect(tab)}
            key={tab[itemProperty]}
            className={
              tab === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {tab[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}
FilterTab.defaultProps = {
  textProperty: "name",
  itemProperty: "_id",
};

export default FilterTab;
