const whatsappChatIcon = document.getElementById('whatsappIcon');
const whatsappPopUpChatBox = document.getElementById('whatsappchatBoxPopUp');
const whatsappCloseBtn = document.getElementById('whatsappCloseBtn');

//Show whtasappPopUpChatBox when user clicks on whatsappChatIcon
whatsappChatIcon.addEventListener('click', () => {
    whatsappPopUpChatBox.style.display ='grid';
  });

//Remove whtasappPopUpChatBox when user clicks on whatsappChatIcon
whatsappCloseBtn.addEventListener('click', () => {
    whatsappPopUpChatBox.style.display ='none';
  });

  const body = document.getElementById('body');
  const mobileMenuButton = document.getElementById('mobileNavCloseBtn');
  const mobileMenuDropDownNav = document.getElementById('mobilemenuDropDownNav');
  //Show mobileNavDropdown when user clicks on this icon
  mobileMenuButton.addEventListener('click', () => {
  mobileMenuDropDownNav.style.display ='block';
  console.log('ShowMobileMenuDropDown');
  body.style.transform = 'translateX(0%)';
});
