class HeaderComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="mobileMenuBoard">
        <div class="mobileMenuBoardLeft">
            <div class="SecOne">
                <ul class="mobilemenu">
                    <li class="mobilemenu-item"><a href="/home.html">Home</a></li>

                    <li class="mobilemenu-item hasNestedList"><a href="./our-services.html">Our Services</a>
                        <ul class="Nested">
                            <li class="sub-item"><a href="./PTE-Training.html">IELTS/PTE Training</a>
                            </li>
                            <li class="sub-item"><a href="./University-Enrollment.html">University Enrollment</a>
                            </li>
                        </ul>
                        <svg class="hero_def_icon caret" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </li>

                    <li class="mobilemenu-item hasNestedList"><a href="#">Pricing</a>
                        <ul class="Nested">
                            <li class="sub-item"><a href="./PTE-Online-Class-Package.html">IELTS/PTE Online Class Package</a>
                            </li>
                            <li class="sub-item"><a href="./University-Enrollment-Package.html">University Enrollment Package</a>
                            </li>
                        </ul>
                        <svg class="hero_def_icon caret" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </li>
                    <li class="mobilemenu-item"><a href="./ask-an-expert.html">Ask An Expert</a>
                    </li>
                    <li class="mobilemenu-item"><a href="./how-it-works.html">How It Works</a></li>
                    <li class="mobilemenu-item"><a href="./blog.html">Blog</a></li>
                    <li class="mobilemenu-item"><a href="./contact-us.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="CTA--Contact">
                <div>
                    <a href="tel:">
                        <div class="MobileSec CTA--Icon Phone">
                        </div>
                    <span>Phone</span>
                    </a>
                </div>

                <div>
                    <a href="./">
                        <div class="MobileSec CTA--Icon whatsappMobile">
                        </div>
                    Whatsapp
                    </a>
                </div>

            </div>
            <svg id="mobileMenuCloseBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="hero_def_icon mobileMenuCloseIcon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
    <header class="mainHeader">
        <div class="logoSection">
            <h3>AskMeAbroad</h3>
        </div>
        <ul class="menu">
            <li class="menu-item"><a href="./index.html">Home</a></li>
            <li class="menu-item"><a href="#">Our Services</a>
                <ul class="nested-list">
                    <li><a href="./PTE-Training.html">IELTS/PTE Training</a>
                    </li>
                    <li><a href="./University-Enrollment.html">University Enrollment</a>
                    </li>
                </ul>
            </li>
            <li class="menu-item"><a href="#">Pricing</a>
                <ul class="nested-list">
                    <li><a href="./PTE-Online-Class-Package.html">IELTS/PTE Online Class Package</a>
                    </li>
                    <li><a href="./University-Enrollment-Package.html">University Enrollment Package</a>
                    </li>
                </ul>
            </li>
            <li class="menu-item"><a href="./ask-an-expert.html">Ask An Expert</a>
            </li>
            <li class="menu-item"><a href="./how-it-works.html">How It Works</a></li>
            <li class="menu-item"><a href="./blog.html">Blog</a></li>
            <li class="menu-item"><a href="./contact-us.html">Contact Us</a></li>
        </ul>
    </header>

    <div class="heroSection">
        <div class="leftCol">
            <h6 id="heroFirstText">STUDY IN YOUR DREAM COUNTRY</h6>
            <h1>Assisting the aspirants to fulfil their <span class="accent">Study Abroad dream</span> to shine
                globally.</h1>
            <p id="heroModElementThird">Start your step-by-step journey of studying abroad with our experienced mentors and let our customised
                process guide you to reach your dream nation.</p>
            <button class="primary special">ASK EXPERT NOW</button>
            <div class="MainMenu left">
                <div class="logoSection">
                    <h3>AskMeAbroad</h3>
                </div>
                <div class="mobileMenuBtnContainer">
                    <svg id="hamburgerMobileMenu" class="heroIcons-def" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <ul class="miniMenu one">
                    <li class="menu-item"><a href="./home.html">Home</a></li>
                    <li class="menu-item"><a href="#">Our Services</a>
                        <ul class="nested-list">
                            <li><a href="./PTE-Training.html">IELTS/PTE Training</a>
                            </li>
                            <li><a href="./University-Enrollment.html">University Enrollment</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item"><a href="#">Pricing</a>
                        <ul class="nested-list">
                            <li><a href="./PTE-Online-Class-Package.html">IELTS/PTE Online Class Package</a>
                            </li>
                            <li><a href="./University-Enrollment-Package.html">University Enrollment Package</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="heroRightReveal rightCol">
            <div class="heroImageContainer">
                <img src="./Assets/Images/HomePage-Hero.png" alt="">
            </div>
            <div class="MainMenu right">
                <ul class="miniMenu two">
                    <li><a href="./ask-an-expert.html">Ask An Expert</a></li>
                    <li><a href="./how-it-works.html">How It Works</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./contact-us.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
    }

    // // Method to update the veryFirstText content
    //  updateHeaderText(newText) {
    //     const heroFirstText = this.querySelector('#heroFirstText');
    //     if (heroFirstText) {
    //         console.log(`Here we are`);
    //         heroFirstText.innerHTML = newText;
    //     }
    // }
}

customElements.define('header-component', HeaderComponent);