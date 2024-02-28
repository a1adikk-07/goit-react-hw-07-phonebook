import { createSelector } from 'reselect';

export const getAllContactsSelector = store => store.contacts;

export const getFilterSelector = store => store.filter;

export const getFilteredContactsSelector = createSelector(
  [getAllContactsSelector, getFilterSelector],
  (contacts, filter) => {
    if (!filter) {
      return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter)
      );
    });
  }
);

// ===================================================================

// export const getAllContactsSelector = store => store.contacts;

// export const getFilteredContactsSelector = store => {
//   const { contacts, filter } = store;
//   const { items } = contacts;

//   if (!filter) {
//     return contacts;
//   }

//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = items.filter(({ name, number }) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();
//     return (
//       normalizedName.includes(normalizedFilter) ||
//       normalizedNumber.includes(normalizedFilter)
//     );
//   });

//   return { ...contacts, items: filteredContacts };
// };
