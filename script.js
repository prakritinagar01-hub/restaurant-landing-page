// ==================================================
// 🍽️ DELICIOUS BITES - RESTAURANT JAVASCRIPT
// ==================================================


// ==================================================
// 1. ORDER NOW BUTTONS
// ==================================================

const orderButtons = document.querySelectorAll(".orderBtn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const card = this.closest("article");

        const dishName = card.querySelector("h3").textContent;
        const price = card.querySelector("span").textContent;

        alert(
            "🍽️ " + dishName +
            "\nPrice: " + price +
            "\n\nThank you for choosing Delicious Bites!"
        );

    });

});


// ==================================================
// 2. BOOK A TABLE BUTTONS
// ==================================================

const bookButtons = document.querySelectorAll(
    'nav > a, #home a:last-of-type'
);

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const contactSection = document.querySelector("#contact");

        contactSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==================================================
// 3. CONTACT FORM
// ==================================================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameInput = document.querySelector(
            "#contact input[type='text']"
        );

        const emailInput = document.querySelector(
            "#contact input[type='email']"
        );

        const phoneInput = document.querySelector(
            "#contact input[type='tel']"
        );

        const messageInput = document.querySelector(
            "#contact textarea"
        );


        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();


        // Check empty fields

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            alert("⚠️ Please fill in all the fields.");

            return;
        }


        // Success message

        alert(
            "✅ Thank you, " + name + "!\n\n" +
            "Your message has been received.\n" +
            "We will contact you soon."
        );


        // Clear form

        contactForm.reset();

    });

}


// ==================================================
// 4. NAVIGATION LINKS
// ==================================================

const navLinks = document.querySelectorAll(
    "nav ul li a"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            event.preventDefault();

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ==================================================
// 5. CONSOLE MESSAGE
// ==================================================

console.log(
    "🍽️ Delicious Bites website loaded successfully!"
);
