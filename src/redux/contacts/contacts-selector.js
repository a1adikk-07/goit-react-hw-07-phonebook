import { createSelector } from 'reselect';

export const getAllContactsSelector = store => store.contacts;

export const getFilterSelector = store => store.filter;

export const getFilteredContactsSelector = createSelector(
  [getAllContactsSelector, getFilterSelector],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter)
      );
    });
  }
);

// export const getAllContacts = store => store.contacts;

// export const getFilteredContacts = store => {
//   const { contacts, filter } = store;
//   if (!filter) {
//     return contacts;
//   }

//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = contacts.filter(({ name, number }) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();

//     return (
//       normalizedName.includes(normalizedFilter) ||
//       normalizedNumber.includes(normalizedFilter)
//     );
//   });
//   return filteredContacts;
// };
