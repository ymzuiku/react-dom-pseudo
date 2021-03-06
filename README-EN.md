![](.imgs/hover.gif)

## [中文文档](README.md)

CSS in JS is great, but how do you handle the convenience of handling Pseudo-classes? **react-dom-pseudo** provides a component like the `react-motion` method, conveniently a `react-dom` object Provide pseudo-classes like CSS.

We first install with `npm`:

```sh
$ npm install --save react-dom-pseudo
```

## APIs

**react-dom-pseudo** following pseudo-classes are supported：

Will merge with all styles and override duplicate style properties

| Props        | Analog pseudo-class | Description                                     | Default Value | Is Must |
| ------------ | ------------------- | ----------------------------------------------- | ------------- | ------- |
| merge        |                     | Whether to merge with `style` and `otherStyles` | true          | No      |
| disable      |                     | Whether to cancel the event listener            | false         | No      |
| style        |                     | Style of default                                | undefined     | No      |
| linkStyle    | :link               | Style of not clicked before                     | undefined     | No      |
| visitedStyle | :visited            | Style of that has been clicked                  | undefined     | No      |
| focusStyle   | :focus              | Style of type element such as input onFocus     | undefined     | No      |
| hoverStyle   | :hover              | Style of displayed when the mouse is moved in   | undefined     | No      |
| activeStyle  | :active             | Style of when mouse or touch screen clicks      | undefined     | No      |
| disableStyle |                     | Style of when disable event listener            | undefined     | No      |
| alwayStyle   |                     | Merge with all styles                           | undefined     | No      |

They will trigger based on the event，and merge `style`， like `{...style, ...activeStyle}`

Only existing styles will be merged

Combination rules for styles: `{...style, ...linkStyle, ...eventStyle, ...disableStyle, ...alwayStyle}`

## Use

```js
import Pseudo from 'react-dom-pseudo';

export default () => {
  return (
    <div>
      <div>example:</div>
      <Pseudo
        style={sheet.input}
        hoverStyle={sheet.inputHover}
        focusStyle={sheet.inputFocus}
      >
        {events => <input {...events} />}
      </Pseudo>
    </div>
  );
};

// CSS in js
const sheet = {
  input: {
    fontSize: '14px',
    border: '1px solid rgba(0,0,0,0)',
    background: '#f3f3f3',
    // use transition animate
    transition: 'all 0.2s ease-out',
  },
  inputHover: {
    background: '#f0f0f0',
  },
  inputFocus: {
    border: '1px solid rgba(0,0,0,0.1)',
    background: '#f0f0f3',
    transitionTimingFunction: 'ease-in',
  },
};
```

## What did it do?

Pseudo's renderProps contains the following events:

- onClick: Used to simulate :link & :visited
- onFocus\Blur: Used to simulate :focus
- onMouseEnter\Leave: Used to simulate :hover
- onMouseDown\Up: Used to simulate :active

If the project is executed on the mobile side, it will
`onMouse?` changeTo `onTouch?`

## License

```
MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
