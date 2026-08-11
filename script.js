// ===== ORDER NOW BUTTONS =====

const orderButtons = document.querySelectorAll("#menu article a");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const dishName = this.parentElement.querySelector("h3").textContent;
        const price = this.parentElement.querySelector("span").textContent;

        alert(
            "🍽️ " + dishName +
            "\nPrice: " + price +
            "\n\nThank you for choosing Delicious Bites!"
        );
    });
});


// ===== BOOK A TABLE BUTTONS =====

const bookButtons = document.querySelectorAll(
    'nav > a, #home a:last-of-type'
);

bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===== CONTACT FORM =====

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#contact input[type='text']").value.trim();
    const email = document.querySelector("#contact input[type='email']").value.trim();
    const phone = document.querySelector("#contact input[type='tel']").value.trim();
    const message = document.querySelector("#contact textarea").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("⚠️ Please fill in all the fields.");
        return;
    }

    alert(
        "✅ Thank you, " + name + "!\n\n" +
        "Your message has been received.\n" +
        "We will contact you soon."
    );

    contactForm.reset();
});


// ===== NAVIGATION LINKS =====

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            event.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== WELCOME MESSAGE =====

console.log("🍽️ Delicious Bites website loaded successfully!");