export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.filter.toLowerCase();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.phone.toLowerCase().includes(filter)
  );
};

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;
