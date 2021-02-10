import { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownList from './DropdownList.jsx';

export default function Dropdown(props) {
  const { title, items } = props;
  const [state, setState] = useState({
    listVisible: false,
    activeItem: null
  });

  const onListToggle = () => {
    setState((prev) => ({
      ...prev,
      listVisible: !prev.listVisible,
    }));
  };

  const onItemSelect = (item) => {
    setState((prev) => ({
      ...prev,
      listVisible: false,
      activeItem: item.id,
    }));
  }

  const ddClass = ['dropdown-wrapper'];
  if (state.listVisible) {
    ddClass.push('open');
  }

  return (
    <div className={ddClass.join(' ')}>
      <button className="btn" onClick={onListToggle}>
        <span>{title}</span>
        <span className="material-icons">public</span>
      </button>
      <DropdownList items={items} activeItem={state.activeItem} onItemSelect={onItemSelect} />
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired
};
