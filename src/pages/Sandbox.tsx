import React, { FC } from 'react';
import Button from "./../components/Button";
import { useState } from "react";
import './Sandbox.scss';

const Sandbox: FC = () => {
  const [count, setCount] = useState(0);
  function Decrease() {
    setCount(count - 1)
  }

  function Increase() {
    setCount(count + 1)
  }

  return (
    <div className='conta'>
      <div className="row justify-content-around">
        <div className='col-4'>
          <h3><b>Counter:{count}</b></h3>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-4">
          <Button click={() => Decrease()} className={count < 1 ? 'btn btn-danger btn-lg disabled' : 'btn btn-danger btn-lg'}> - Decrease</Button>
        </div>
        <div className="col-4">
          <Button click={() => Increase()} className='btn btn-primary btn-lg'> + Increase</Button>
        </div>
      </div>
    </div>
  );
}

export default Sandbox;