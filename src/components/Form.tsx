import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NameInput from './NameInput'
import AgeInput from './AgeInput'
import SexInput from './SexInput'

import { updatePerson, AppState, Person } from '../store'

interface FormProps {
  person: Person
  updatePerson: typeof updatePerson
}

class Form extends Component<FormProps, {}> {
  render() {
    return (
      <form>
        <div>
          <NameInput
            name={this.props.person.name}
            error={false}
            onNameChange={(event: any) => {
              this.props.updatePerson('name', event.target.value)
            }}
          />
        </div>
        <div>
          <AgeInput
            age={this.props.person.age}
            error={false}
            onAgeChange={() => {}}
          />
        </div>
        <div>
          <SexInput
            sex={this.props.person.sex}
            onSexChange={() => {}}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  person: state.person
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  { updatePerson }
)(Form);

// export default Form
