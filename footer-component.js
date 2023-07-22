class FooterComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`


        <section class="ActionBodyBottom">
        <div class="whatsappContainer-All">
            <div id="whatsappIcon" class="whatsapp" onclick="openWhatsappChatBox()">
                <div class="callout">Chat With Us</div>
            </div>
            <div id="whatsappchatBoxPopUp" class="whatsappchatBoxPopUp">
                <div>
                    <h4>Askmeabroad.com</h4>
                </div>
                <div>
                    <p class="respButton chat">How can I help you?</p>
                </div>
                <div>
                    <p onclick="redirectToWhatsappAPI()" class="respButton"><span> E </span>Chat With Us</p>
                </div>
                <svg onclick="exitWhatsappChatBox()" class="whatsappcloseBtn hero_def_icon"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

        </div>
        <div class="robotContainer-All">
            <div class="robotCallout">
                <strong>We are Online!</strong> <br> How may I help you today?
                <svg onclick="closeBtnRobotCallOut()" class="closeBtnRobotCallOut" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="robotChat"></div>
        </div>
        </section>


        `;
    }
}

customElements.define('footer-component', FooterComponent);