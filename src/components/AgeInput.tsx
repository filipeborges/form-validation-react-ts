import React, { Component } from 'react';
import Input from './Input'

const invalidAgeMsg = 'A idade deve ser maior do que 5 anos'

interface IAgeInputProps {
  age: number
  error: boolean
  onAgeChange: (event: any) => void
}

interface IAgeInputState {
  age: number
}

export default class AgeInput extends Component<IAgeInputProps, IAgeInputState> {
  constructor(props: IAgeInputProps) {
    super(props)
    this.state = {
      age: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <div><label>Idade:</label></div>
        <div>
          <Input
            style={{ height: '32px' }}
            type='number'
            required={true}
            value={this.props.age}
            errorMsg={this.props.error ? invalidAgeMsg : undefined}
            onChange={this.props.onAgeChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

