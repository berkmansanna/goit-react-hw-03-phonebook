import React, { Component } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList'
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevState) {
    const {contacts} = this.state
    const stringifyContacts = JSON.stringify(contacts)
    
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', stringifyContacts)
    }
  }
  
  formSubmitHandler = ({ name, number }) => {
    const onList = this.state.contacts.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {
            id: nanoid(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  }



  onDeleteContact = (contactId) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

    changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }
  
  render() {
    const { contacts } = this.state;

    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

     return (
       <div>
         <h1>Phonebook</h1>
         <ContactForm
           onSubmit={this.formSubmitHandler} />
         <h2>Contacts</h2>
         <Filter
          value={filter}
          changeFilter={this.changeFilter}
        />
         <ContactList
           contacts={contacts}
           filteredContacts={filteredContacts}
           onDeleteContact={this.onDeleteContact} />
    </div>
  );
  }
 
};
