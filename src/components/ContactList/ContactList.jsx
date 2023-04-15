import PropTypes from 'prop-types';
import { Li, Button, Span, P, Ul } from './contact.styled';

export const ContactList = ({ contacts, onContactsDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <P>{name}:</P>
          <Span>{number}</Span>
          <Button type="button" onClick={() => onContactsDelete(id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.object.isRequired,
  onContactsDelete: PropTypes.func.isRequired,
};
