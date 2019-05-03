import React, { Component } from 'react';
import Input from './Input'

interface ISexInputProps {
  sex: string
  onSexChange: (event: any) => void
}

interface ISexInputState {
  sex: string
}

export default class SexInput extends Component<ISexInputProps, ISexInputState> {
  constructor(props: ISexInputProps) {
    super(props)
    this.state = {
      sex: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <div><label>Sexo:</label></div>
        <div>
          <Input
            type='text'
            required={true}
            value={this.props.sex}
            onChange={this.props.onSexChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

