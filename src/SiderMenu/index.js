import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Scrollbar from 'mt-ui-components/Scrollbar';

import SiderWrapper from './Wrapper';
import SiderStyle from './style';

const itemShape = PropTypes.shape({
  type: PropTypes.oneOf(['Group', 'SubMenu', 'Item']).isRequired,
  scroll: PropTypes.bool,
  chilren: itemShape
});

class SiderMenu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemShape),
    selected: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    sectionScroll: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
  };
  static defaultProps = {
    width: 280,
    selected: []
  };

  state = {
    scrollableHeight: undefined
  };

  fixedMenuRef = React.createRef();

  componentDidMount() {
    const el = this.fixedMenuRef.current;
    const { height, top } = el.getBoundingClientRect();
    this.setState({
      scrollableHeight: `calc(100vh - ${height + top}px)`
    });
  }

  render() {
    const { items, onClick, width, sectionScroll, selected } = this.props;
    const { scrollableHeight } = this.state;

    const commonProps = {
      width,
      onClick,
      selected,
      height: scrollableHeight
    };

    let fixedItems = items;
    let scrollableItems = [];

    if (sectionScroll) {
      const index = items.findIndex(({ scroll }) => scroll);
      if (index !== -1) {
        fixedItems = items.slice(0, index);
        scrollableItems = items.slice(index);
      }
    }

    return (
      <SiderStyle>
        {sectionScroll && (
          <>
            <div ref={this.fixedMenuRef}>
              <SiderWrapper
                items={fixedItems}
                {...commonProps}
                height={undefined}
              />
            </div>
            <Scrollbar style={{ height: scrollableHeight, width }}>
              <SiderWrapper
                className="userDefinedItems"
                items={scrollableItems}
                {...commonProps}
              />
            </Scrollbar>
          </>
        )}
        {!sectionScroll && (
          <div ref={this.fixedMenuRef}>
            <Scrollbar style={{ height: scrollableHeight, width }}>
              <SiderWrapper items={items} {...commonProps} />
            </Scrollbar>
          </div>
        )}
      </SiderStyle>
    );
  }
}

export default SiderMenu;
