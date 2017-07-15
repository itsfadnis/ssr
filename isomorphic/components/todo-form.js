import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.input.value.trim().length > 0) {
      this.props.onSubmit(this.input.value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <input
          placeholder="New todo"
          required
          ref={(node) => { this.input = node; }}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
