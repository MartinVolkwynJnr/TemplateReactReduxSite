import React from "react";
import { connect } from "react-redux";
import * as contactActions from "../../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class contactPage extends React.Component {
  state = {
    contact: {
      name: ""
    }
  };

  handlechange = event => {
    const contact = { ...this.state.contact, name: event.target.value };
    this.setState({ contact });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createContact(this.state.contact);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Contact Information</h2>
        <h3>Enter Name and Surname</h3>
        <input
          type="text"
          onChange={this.handlechange}
          value={this.state.contact.name}
        />
        <input type="submit" value="Save" />
        {this.props.contacts.map(contact => (
          <div key={contact.name}>{contact.name}</div>
        ))}
      </form>
    );
  }
}

contactPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispacthToProps(dispatch) {
  return {
    //bindActionCreators goes through the
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(contactPage);
