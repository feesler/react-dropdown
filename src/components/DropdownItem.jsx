import PropTypes from 'prop-types';

export default function DropdownItem(props) {
  const { item, active, onItemClick } = props;

  const onClick = (e) => {
    e.preventDefault();
    onItemClick(item);
  };

  const itemStyle = {};
  if (active) {
    itemStyle.color = '#5380F7';
  }

  return (
    <li style={itemStyle}>
      <a href={item.link} onClick={onClick}>
        {item.title}
      </a>
    </li>
  )
}

DropdownItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  active: PropTypes.bool,
  onItemSelected: PropTypes.func,
};

DropdownItem.defaultProps = {
  item: {
    link: '#',
  },
  active: false,
  onItemSelected: null,
};
