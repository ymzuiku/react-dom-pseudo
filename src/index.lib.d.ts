import React, { Component } from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  merge?: boolean;
  disable?: boolean;
  linkStyle?: React.CSSProperties;
  focusStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  visitedStyle?: React.CSSProperties;
  disableStyle?: React.CSSProperties;
  alwayStyle?: React.CSSProperties;
}

export default class extends Component<IProps> {}