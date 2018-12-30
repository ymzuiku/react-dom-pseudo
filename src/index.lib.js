import React from 'react';

class Pseudo extends React.PureComponent {
  static defaultProps = {
    disable: false,
    style: undefined,
    mobileStyle: undefined,
    focusStyle: undefined,
    hoverStyle: undefined,
    activeStyle: undefined,
    activeMobileStyle: undefined,
    visitedStyle: undefined,
    disableStyle: undefined,
    alwayStyle: undefined,
  };
  state = {
    hover: false,
    focus: false,
    active: false,
    visited: false,
  };
  isMobile = false;
  componentDidMount() {
    this.isMobile = this.getIsMobile();
  }
  getIsMobile = () => {
    if (typeof window === 'undefined' || !navigator || !navigator.userAgent) {
      return false;
    }
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.search(/ipad/i) > -1;
    const bIsIphoneOs = sUserAgent.search(/iphone os/i) > -1;
    const bIsIphone = sUserAgent.search(/iphone/i) > -1;
    const bIsMidp = sUserAgent.search(/midp/i) > -1;
    const bIsUc7 = sUserAgent.search(/rv:1.2.3.4/) > -1;
    const bIsUc = sUserAgent.search(/ucweb/i) > -1;
    const bIsAndroid = sUserAgent.search(/android/) > -1;
    const bIsCE = sUserAgent.search(/windows ce/i) > -1;
    const bIsWM = sUserAgent.search(/windows mobile/i) > -1;
    const bIsMicor = sUserAgent.search(/microMessenger/i) > -1;
    const bIsWKWebview = sUserAgent.search(/wkwebview/i) > -1;
    if (
      bIsIpad ||
      bIsIphone ||
      bIsIphoneOs ||
      bIsMidp ||
      bIsUc7 ||
      bIsUc ||
      bIsAndroid ||
      bIsCE ||
      bIsWM ||
      bIsMicor ||
      bIsWKWebview
    ) {
      return true;
    }
    return false;
  };
  handleClick = () => {
    if (this.state.visited === false) {
      this.setState({
        visited: true,
      });
    }
    if (this.props.onClick) {
      this.props.onClick({ ...this.state });
    }
  };
  handleMouseIn = () => {
    if (this.isMobile) {
      return;
    }
    this.setState({
      hover: true,
    });
  };
  handleMouseDown = () => {
    if (this.isMobile) {
      return;
    }
    this.setState({
      active: true,
    });
  };
  handleMouseOut = () => {
    if (this.isMobile) {
      return;
    }
    this.setState({
      hover: false,
      active: false,
    });
  };
  handleMouseUp = () => {
    if (this.isMobile) {
      return;
    }
    this.setState({
      active: false,
    });
    this.handleClick();
  };
  handleTouchStart = () => {
    if (!this.isMobile) {
      return;
    }
    this.setState({
      active: true,
    });
  };
  handleTouchEnd = () => {
    if (!this.isMobile) {
      return;
    }
    this.setState({
      hover: false,
      active: false,
    });
    if (typeof this.props.onClick === 'function') {
      this.handleClick();
    }
  };
  handleTouchCancel = () => {
    if (!this.isMobile) {
      return;
    }
    this.setState({
      hover: false,
      active: false,
    });
  };
  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };
  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };
  select = (defaultStyle, hoverStyle, focusStyle) => {
    if (this.state.focus) {
      return focusStyle;
    } else if (this.state.hover) {
      return hoverStyle;
    }
    return defaultStyle;
  };
  fixStyle = () => {
    const {
      style,
      mobileStyle,
      disable,
      focusStyle,
      hoverStyle,
      activeStyle,
      visitedStyle,
      disableStyle,
      alwayStyle,
      activeMobileStyle,
    } = this.props;

    let normalStyle;
    if (this.isMobile && mobileStyle) {
      normalStyle = { cursor: 'pointer', ...mobileStyle };
    } else {
      normalStyle = { cursor: 'pointer', ...style };
    }
    if (visitedStyle && this.state.visited) {
      normalStyle = { ...normalStyle, ...visitedStyle };
    }
    // fix styles
    if (disable) {
      return { ...normalStyle, ...disableStyle, ...alwayStyle };
    }
    if (activeMobileStyle && this.state.active && this.isMobile) {
      return { ...normalStyle, ...activeMobileStyle, ...alwayStyle };
    }
    if (activeStyle && this.state.active) {
      return { ...normalStyle, ...activeStyle, ...alwayStyle };
    }
    if (focusStyle && this.state.focus) {
      return { ...normalStyle, ...focusStyle, ...alwayStyle };
    }
    if (hoverStyle && this.state.hover) {
      return { ...normalStyle, ...hoverStyle, ...alwayStyle };
    }
    // 还原默认样式
    return { ...normalStyle, ...alwayStyle };
  };
  renderDiv = event => {
    const {
      style,
      mobileStyle,
      merge,
      disable,
      focusStyle,
      hoverStyle,
      activeStyle,
      activeMobileStyle,
      visitedStyle,
      disableStyle,
      alwayStyle,
      onClick,
      ...rest
    } = this.props;
    return <div {...event} {...rest} />;
  };
  render() {
    let children;
    if (typeof this.props.children === 'function') {
      children = this.props.children;
    } else {
      children = this.renderDiv;
    }
    // if disable, remove mouse and touch event
    if (this.props.disable) {
      return children(
        {
          style: this.fixStyle(),
        },
        { ...this.state },
      );
    }
    // if moblie use touch events
    return children(
      {
        style: this.fixStyle(),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onTouchStart: this.handleTouchStart,
        onTouchEndCapture: this.handleTouchEnd,
        onTouchCancel: this.handleTouchCancel,
        onMouseEnter: this.handleMouseIn,
        onMouseLeave: this.handleMouseOut,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
      },
      { ...this.state },
    );
  }
}

export default Pseudo;
