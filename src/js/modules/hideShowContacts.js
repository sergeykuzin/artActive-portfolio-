const hideShowContacts = () => {
  const contactsButtonToggle = document.querySelector('.contacts__visibility-toggle');
  const contactsWrapper = document.querySelector('.contacts__wrapper');
  contactsButtonToggle.addEventListener('click', () => {
    contactsWrapper.classList.toggle('contacts__wrapper--hide');
  });
};

export default hideShowContacts;
