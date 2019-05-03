import React, { Component } from 'react';
import Input from './Input'

const invalidNameMsg = 'Nome deve ter 2 ou mais caracteres'

interface INameInputProps {
  name: string
  error: boolean
  onNameChange: (event: any) => void
}

interface INameInputState {
  name: string
}

export default class NameInput extends Component<INameInputProps, INameInputState> {
  constructor(props: INameInputProps) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <div><label>Nome:</label></div>
        <div>
          <Input
            type='text'
            required={true}
            value={this.props.name}
            errorMsg={this.props.error ? invalidNameMsg : undefined}
            onChange={this.props.onNameChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

