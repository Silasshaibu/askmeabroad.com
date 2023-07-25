class FormComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`

        <div class=" contactForm">
        <form action="" method="POST">
            <input type="text" name="name" placeholder="Full Name">
            <input type="text" name="name" placeholder="Your Mobile Number">
            <select name="Courses" id="Courses-select">
                <option value="IELTS/PTE">IELTS/PTE Training</option>
                <option value="Reality Test">Reality Test</option>
                <option value="Study Visa">Study Visa</option>
                <option value="University Enrollment">University Enrollment</option>

            </select>
            <input type="email" name="email" id="aspiringUserEmail" placeholder="example@gmail.com">
            <input class="button primary special" type="submit" value="Yes, I am Interested in Study Abroad">
        </form>
        </div>

    `}
}
customElements.define('form-component', FormComponent);