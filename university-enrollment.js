//For every section in sections let when user clicks on the section top, the section buttom should reveal it self (toggle) effect
const contents = document.querySelectorAll('.howItWorksContent');

contents.forEach((content)=>{
    const titleLid = content.querySelector('.titleLid')
    const titleInner = content.querySelector('.titleInner');
    const svgCaretArrow = content.querySelector('.svgArrowup')
    titleLid.addEventListener('click', ()=>{
            titleInner.classList.toggle('active');
            svgCaretArrow.classList.toggle('active');
    });


});