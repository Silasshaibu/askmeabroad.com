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
  console.log('bodyToTranslateX-axis__unit')
});


//Change the color of the whatsapp Contact Icon
function changeBackgroundColor() {
  let colorDiv = document.getElementById("whatsappIcon");
  let colors = ["#25D366", "#8913C6"]; // Add more colors as you want
  let currentColor = colorDiv.style.backgroundColor;

  // Find the index of the current color in the array
  let currentIndex = colors.indexOf(currentColor);

  // Calculate the index of the next color
  let nextIndex = (currentIndex + 1) % colors.length;

  // Update the background color of the div
  colorDiv.style.backgroundColor = colors[nextIndex];
}

// Call the function initially
changeBackgroundColor();

// Set an interval to call the function every .1 minutes
setInterval(changeBackgroundColor, .1 * 30 * 1000);

