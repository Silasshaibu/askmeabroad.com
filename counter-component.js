class CounterComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="default-section boast">
            <div class="achievements">
                <div class="icon"></div>
                <p><span class="count">5,000+</span></p>
                <span class="achieved">Students Helped</span>
            </div>
            <div class="achievements">
                <div class="icon"></div>
                <p><span class="count">95%</span></p>
                <span class="achieved">Acceptance Rate</span>
            </div>
            <div class="achievements">
                <div class="icon"></div>
                <p><span class="count">1,600+</span></p>
                <span class="achieved">Partner School</span>
            </div>
        </div>

        `
    }
}

customElements.define('counter-component', CounterComponent);
