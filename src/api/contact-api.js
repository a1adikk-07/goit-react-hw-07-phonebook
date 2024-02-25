import axios from 'axios';

const ContactInstance = axios.create({
  baseURL: 'https://65db43603ea883a152916b07.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await ContactInstance.get('/');
  return data;
};

export const postContacts = async body => {
  const { data } = await ContactInstance.post('/', body);
  return data;
};

export const removeContacts = async id => {
  const { data } = await ContactInstance.delete(`/${id}`);
  return data;
};
