import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    query: ""
  };

  updateQuery = value => {
    this.setState(() => ({
      query: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.onCreateContact) {
      this.props.onCreateContact(e.target);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          type="text"
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
