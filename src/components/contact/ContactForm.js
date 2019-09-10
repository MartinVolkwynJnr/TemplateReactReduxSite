import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const contactForm = ({
  contact,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Contact Us</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="Name"
        label="Name"
        value={contact.title}
        onChange={onChange}
        error={errors.Name}
      />

      <TextInput
        name="Surname"
        label="Surname"
        value={contact.authorId}
        onChange={onChange}
        error={errors.Surname}
      />

      <TextInput
        name="email"
        label="email"
        value={contact.category}
        onChange={onChange}
        error={errors.email}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

contactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default contactForm;
