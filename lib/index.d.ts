import * as React from 'react';

interface IProps {
  merge?: boolean;
  disable?: boolean;
  style: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  focusStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  visitedStyle?: React.CSSProperties;
  disableStyle?: React.CSSProperties;
  alwayStyle?: React.CSSProperties;
  children?: any;
}

declare const Pseudo: (props: IProps) => any;
