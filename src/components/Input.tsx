import React, { HTMLProps } from 'react';

// import { Container } from './styles';

interface IInputProps extends HTMLProps<any> {
  errorMsg?: string
}

export default function Input(props: IInputProps) {
  return (
    <div>
      <input {...props} />
      {props.errorMsg && <div><span>{props.errorMsg}</span></div>}
    </div>
  );
}
