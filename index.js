const whatsappChatIcon = document.getElementById('whatsappIcon');
const whatsappPopUpChatBox = document.getElementById('whatsappchatBoxPopUp');
const whatsappCloseBtn = document.getElementById('whatsappCloseBtn');

//Show whtasappPopUpChatBox when user clicks on whatsappChatIcon
whatsappChatIcon.addEventListener('click', () => {
    whatsappPopUpChatBox.style.display ='grid';
  });


whatsappCloseBtn.addEventListener('click', () => {
    whatsappPopUpChatBox.style.display ='none';
  });