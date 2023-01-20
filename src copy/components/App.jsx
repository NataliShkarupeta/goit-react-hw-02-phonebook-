import React from 'react';
import { Component } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { nanoid } from 'nanoid';
import { InputFind } from './Input/InputFind';

import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handelDel = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  nameForFilter = e => {
    this.setState({ filter: e.target.value });
  };
  cangeArreyContacts = () => {
    const { filter, contacts } = this.state;
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  };

  onDeleteContact = idContact => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    return (
      <>
        <Title text="Phonebook" />
        <Wrap>
          <InputName contact={this.state.contacts} send={this.addContact} />
        </Wrap>
        <Title text="Contscts" />
        <InputFind filter={this.state.filter} find={this.nameForFilter} />
        <Contacts
          contact={this.cangeArreyContacts()}
          onDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
