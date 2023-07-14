const whatsappChatIcon = document.getElementById('whatsappIcon');

const whatsappPopUpChatBox = document.getElementById('whatsappchatBoxPopUp');

//Opening the whatsappPopUpChat with the whatsapp Close btn
function openWhatsappPopUp(){
  whatsappPopUpChatBox.style.display ='grid';
}

//Closing the whatsappPopUpChat with the whatsapp Close btn
function whatsappCloseBtn(){
  whatsappPopUpChatBox.style.display ='none';
}


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

//on hover show, close button on robot callout
//on click on close button


const body = document.getElementById('body');
const mobileMenuButton = document.getElementById('mobileNavCloseBtn');
const mobileMenuDropDownNav = document.getElementById('mobilemenuDropDownNav');

function mobileMenuOpen(){
mobileMenuDropDownNav.style.display ='block';
body.style.transform = 'translateX(0%)';
}




