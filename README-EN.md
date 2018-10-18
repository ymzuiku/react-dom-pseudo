# react-dom-pseudo

![](.imgs/hover.gif)

>

[中文文档](README.md)


CSS in JS is great, but how do you handle the convenience of handling Pseudo-classes? **react-dom-pseudo** provides a component like the `react-motion` method, conveniently a `react-dom` object Provide pseudo-classes like CSS.

We first install with `npm`:

```sh
$ npm install --save react-dom-pseudo
```

## APIs

**react-dom-pseudo** following pseudo-classes are supported：

| Props        | 模拟伪类 | 说明                                        | 默认值    | 必须 |
| ------------ | -------- | ------------------------------------------- | --------- | ---- |
| merge        |          | 是否使用 style 和 其他状态的 style 进行合并 | true      | 否   |
| disable      |          | 是否取消事件监听                            | false     | 否   |
| style        |          | 默认样式                                    | undefined | 否   |
| linkStyle    | :link    | 未被点击之前的样式                          | undefined | 否   |
| visitedStyle | :visited | 被点击过的样式                              | 否        |
| focusStyle   | :focus   | input 等类型元素 onFocus 时的样式           | undefined | 否   |
| hoverStyle   | :hover   | 鼠标移入时显示的样式                        | 否        |
| activeStyle  | :active  | 鼠标或者触屏点击时的样式                    | 否        |
| disableStyle |          | 当取消事件监听时的样式                      | 否        |
| alwayStyle   |          | 以上所有样式时，都会存在的样式，注意        | 否        |

They will trigger based on the event，and merge `style`， like `{...style, ...activeStyle}`

Only existing styles will be merged

Combination rules for styles: `{...style, ...linkStyle, ...eventStyle, ...disableStyle, ...alwayStyle}`

## 使用

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
