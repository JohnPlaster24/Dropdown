document.addEventListener("DOMContentLoaded", function() {
    const mainDropdown = document.getElementById("mainDropdown");
    const secondaryDropdown = document.getElementById("secondaryDropdown");
    const reviewDropdown = document.getElementById("reviewDropdown");
    const textBox = document.getElementById("textBox");
    const noteDropdown = document.getElementById("noteDropdown");
    const bottomTextbox = document.getElementById("bottomTextbox");

    mainDropdown.addEventListener("change", function() {
        secondaryDropdown.innerHTML = "";
        reviewDropdown.innerHTML = "";
        textBox.value = "";
        noteDropdown.innerHTML = "";
        bottomTextbox.value = "";

        const selectedValue = mainDropdown.value;

        if (selectedValue === "4837") {
            const secondaryOptions = ["Approve", "Deny"];
            populateDropdown(secondaryDropdown, secondaryOptions);
            secondaryDropdown.style.display = "block";
            secondaryDropdown.addEventListener("change", function() {
                const selectedSecondary = secondaryDropdown.value;
                if (selectedSecondary === "Approve") {
                    const reviewOptions = ["Review documentation: confirmed", "Review documentation: invalid", "Review documentation: Valid"];
                    populateDropdown(reviewDropdown, reviewOptions);
                    reviewDropdown.style.display = "block";
                } else if (selectedSecondary === "Deny") {
                    const noteOptions = ["No further CB rights: Name", "Passenger name", "Cardholder"];
                    populateDropdown(noteDropdown, noteOptions);
                    noteDropdown.style.display = "block";
                }
            });
        } else if (selectedValue === "4870") {
            // Handle 4870 case
        } else if (selectedValue === "4853-1") {
            // Handle 4853-1 case
        }
    });

    reviewDropdown.addEventListener("change", function() {
        const selectedReview = reviewDropdown.value;
        if (selectedReview === "Review documentation: confirmed") {
            textBox.value = "When merchant does not provide";
        } else if (selectedReview === "Review documentation: Valid") {
            textBox.value = "All pertinent information";
        }
    });

    function populateDropdown(dropdown, options) {
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.text = option;
            dropdown.add(optionElement);
        });
    }

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedMain = mainDropdown.value;
        const selectedSecondary = secondaryDropdown.value || "";
        const selectedReview = reviewDropdown.value || "";
        const selectedNote = noteDropdown.value || "";
        bottomTextbox.value = `${selectedMain} : ${selectedSecondary} : ${selectedReview} : ${selectedNote}`;
    });
});