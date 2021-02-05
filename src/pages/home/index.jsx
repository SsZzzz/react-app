import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';

function App(props) {
  const {
    demoStore: { name },
  } = props;

  return (
    <div className="App">
      <span>{name}</span>
      <Button>btn</Button>
    </div>
  );
}

export default inject('demoStore')(observer(App));
