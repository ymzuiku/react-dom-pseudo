import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.lib';

function handleOnClick() {
  console.log('click');
}

ReactDOM.render(
  <div>
    <Button activeStyle={{ backgroundColor: '#f3f3f3' }} onClick={handleOnClick}>
      test
    </Button>
  </div>,
  document.getElementById('root'),
);
