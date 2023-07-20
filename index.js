const whatsappChatIcon = document.getElementById('whatsappIcon');

const whatsappPopUpChatBox = document.getElementById('whatsappchatBoxPopUp');


//Opening the whatsappPopUpChat with the whatsapp Close btn
function openWhatsappChatBox(){
  whatsappPopUpChatBox.style.display ='grid';
}
//Closing the whatsappPopUpChat with the whatsapp Close btn
function exitWhatsappChatBox(){
  whatsappPopUpChatBox.style.display ='none';
}

function closeBtnRobotCallOut(){
  const robotCallout = document.querySelector('.robotCallout');

  const robotCallOutExitBtn = document.querySelector('.closeBtnRobotCallOut');
  robotCallout.style.display='none';
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


function closeMobileMenuSection(){
const mobileCloseBtn = document.getElementById("CloseBtnMobileMenu");
const mobileMenu = document.querySelector('.mobileMenuBody');
mobileMenu.style.display = 'none';
}

const mobileMenuBtn = document.getElementById('hamburgerMobileMenu');


const mobileMenuBody = document.querySelector('.mobileMenuBody');
mobileMenuBtn.addEventListener('click', ()=>{
  console.log('openMobileSection');
  mobileMenuBody.style.display = 'block';
})

const body = document.getElementById('body');
const mobileMenuButton = document.getElementById('mobileNavCloseBtn');
const mobileMenuDropDownNav = document.getElementById('mobilemenuDropDownNav');

function mobileMenuOpen(){
mobileMenuDropDownNav.style.display ='block';
body.style.transform = 'translateX(0%)';
}


//Setting the copyright year to this present year
const thisYear = new Date().getFullYear();
const currentYear = document.querySelector('#currentYear');
currentYear.innerHTML = thisYear;


//Putting Carret Right Arrows and Nav or Ul that has nested list
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
    // Check if the menu item contains <ul> or <li> elements
    if (menuItem.querySelector('ul') || menuItem.querySelector('li')) {
      // Add the menu-caret class to the menu item
      menuItem.classList.add('menu-caret');

      // Add click event listener to toggle visibility, rotate caret, and select/deselect
      menuItem.addEventListener('click', () => {
        // Deselect other menu items
        menuItems.forEach((otherMenuItem) => {
          if (otherMenuItem !== menuItem) {
            otherMenuItem.classList.remove('active');
            otherMenuItem.classList.remove('rotate');
            const nestedList = otherMenuItem.querySelector('.nested-list');
            if (nestedList) {
              nestedList.classList.remove('visible');
            }
          }
        });

        // Toggle the visibility of the nested list
        const nestedList = menuItem.querySelector('.nested-list');
        if (nestedList) {
          nestedList.classList.toggle('visible');
        }

        // Toggle the rotation and active state of the menu item
        menuItem.classList.toggle('rotate');
        menuItem.classList.toggle('active');
      });
    }
  });


  //Opens a popup window for reaching the whatsapp enduser when the studentUser clicks on "ChatWithUsButton" inside the whatsappChatPopUpBox
  function redirectToWhatsappAPI(){
    var popupWindow = window.open( "https://api.whatsapp.com/send/?phone=918053064652&text=I+have+a+few+questions%2C+Can+you+help%3F", "WhatsappConnectPopUp", "width=600, height=400");
  }





// let options = {
//   root:null,
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(function(){

// }, options);









