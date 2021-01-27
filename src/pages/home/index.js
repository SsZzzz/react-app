import React from 'react';
import { inject, observer } from 'mobx-react';

function App(props) {
  const {
    demoStore: { name },
  } = props;

  return (
    <div className="App">
      <span>{name}</span>
    </div>
  );
}

export default inject('demoStore')(observer(App));
