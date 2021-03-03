import React from 'react';
import ReactDOM from 'react-dom';

const starWarsChars = [
  { name: 'Дарт Вейдер', side: 'dark' },
  { name: 'Люк Скайворкер', side: 'light' },
  { name: 'Палпатин', side: 'dark' },
  { name: 'Йода', side: 'light' },
];

const App = ({ list }) => (
  <ul>
    {list.map((char, index) => (
      <li key={char.name + index}>
        <strong>{char.name}</strong> - &nbsp;
        {char.side}
      </li>
    ))}
  </ul>
);

const withFilteredProps = (Component) => ({ list, side }) => {
  const filteredList = list.filter((char) => char.side === side);
  return <Component list={filteredList} />;
};

const FilteredList = withFilteredProps(App);

ReactDOM.render(
  <FilteredList list={starWarsChars} side="light" />,
  document.getElementById('root')
);
