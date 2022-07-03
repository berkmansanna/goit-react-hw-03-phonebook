import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handelSubmit}>
          <label htmlFor={this.nameInputId} className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.numberInputId} className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handelChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={styles.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
