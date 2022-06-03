import classes from './TransferFilter.module.scss';
import React, { useState, useEffect } from 'react';

const filterValueTransfer = [
  { id: "without", text: 'Без пересадок' },
  { id: "1", text: '1 пересадка' },
  { id: "2", text: '2 пересадки' },
  { id: "3", text: '3 пересадки' },
];

const TransferFilter = () => {

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(filterValueTransfer);
  }, []);
  
  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (id === "all") {
      let tempFilter = filters.map((filter) => {
        return { ...filter, isChecked: checked };
      });
      setFilters(tempFilter);
    } else {
      let tempFilter = filters.map((filter) =>
        filter.id === id ? { ...filter, isChecked: checked } : filter
      );
      setFilters(tempFilter);
    }
  };
  return (
          <div className={classes.filter}>
            <h2 className={classes.title}>
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </h2>
            <ul className={classes.list}>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} checked={!filters.some((filter) => filter?.isChecked !== true)} onChange={handleChange} id="all"/>
                <label htmlFor="all">
                  <span>
                    Все
                  </span>
                </label>
              </li>
              {filters.map((filter) => (
                <li className={classes.item}>
                  <input
                  type="checkbox"
                  className={classes.checkbox}
                  id={filter.id}
                  checked={filter?.isChecked || false}
                  onChange={handleChange}
                  />
                  <label htmlFor={filter.id}>
                    <span>
                      {filter.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default TransferFilter;