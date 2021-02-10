import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem.jsx';

export default function DropdownList(props) {
  const { items, activeItem, onItemSelect } = props;

  return (
    <ul className="dropdown">
      {items.map((item) =>
        <DropdownItem
          key={item.id}
          item={item}
          active={item.id === activeItem}
          onItemClick={onItemSelect}
        />
      )}
    </ul>
  )
}

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  activeItem: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
};

DropdownList.defaultProps = {
  activeItem: null,
};

