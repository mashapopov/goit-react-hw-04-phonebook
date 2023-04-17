import { useState, useEffect } from 'react';
import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid/non-secure';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import defaultContacts from '../data/contacts.json';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [...defaultContacts];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const id = nanoid();

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    )
      return alert(`${data.name} is alredy in contacts`);

    const todo = { id, ...data };

    setContacts([todo, ...contacts]);
  };

  const addFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    // коментар
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactsId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactsId)
    );
  };

  const visibleTodos = addFilterContacts();

  return (
    <Wrapper className="Reviews">
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>

      <Section title={'Contacts'}>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList
          contacts={visibleTodos}
          onContactsDelete={deleteContacts}
        />
      </Section>
    </Wrapper>
  );
}
