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



const lists = document.querySelectorAll('.hasNestedList');
lists.forEach((list)=>{
  if(list.classList.contains("hasNestedList")){
    const nestUlChild = list.querySelector('ul.Nested');

    const svgCaretArrow = list.querySelector('.hero_def_icon.caret');

    list.addEventListener('click', ()=>{
      svgCaretArrow.classList.toggle('active');
      nestUlChild.classList.toggle('active');
    })
  }
});






function openWhatsappChatBox(){
  const whatsappChatIcon = document.getElementById('whatsappIcon');
  const whatsappPopUpChatBox = document.getElementById('whatsappchatBoxPopUp');
  whatsappPopUpChatBox.style.display ='grid';

  const whatsappcloseBtn = document.getElementById('exitWhatsappBox');
  whatsappcloseBtn.addEventListener('click', ()=>{
    whatsappPopUpChatBox.style.display ='none';
  })
}

function redirectToWhatsappAPI(){
  let popupWindow = window.open( "https://api.whatsapp.com/send/?phone=918053064652&text=I+have+a+few+questions%2C+Can+you+help%3F", "WhatsappConnectPopUp", "width=600, height=400");
}


//Closing the RobotCallout with the X btn closest to it
function closeBtnRobotCallOut(){
  const robotCallout = document.querySelector('.robotCallout');
  const robotCallOutExitBtn = document.querySelector('.closeBtnRobotCallOut');
  robotCallout.style.display='none';
}

const mobileMenuOpenBtn = document.getElementById('hamburgerMobileMenu');
const mobileMenuBoard = document.querySelector('.mobileMenuBoard');
const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');

//Always remove the mobileMenuBoard When  The WindowWidth is greater than 600px
function updateMobileMenuDisplay() {
  const mobileMenuBoard = document.querySelector(".mobileMenuBoard");
  const windowWidth = window.innerWidth;
  //Checks if windows screen is greater than 768
  if (windowWidth > 768) {
    mobileMenuBoard.style.display = "none";
  }
}
// Call the function on initial page load
updateMobileMenuDisplay();

// Call the function whenever the window is resized
window.addEventListener("resize", updateMobileMenuDisplay);


//Mobile Button Close, Open, MobileMenuBoard actions
mobileMenuOpenBtn.addEventListener('click', ()=>{
  mobileMenuBoard.style.display ='block';
});

mobileMenuCloseBtn.addEventListener('click', ()=>{
  mobileMenuBoard.style.display ='none';
});




