//alert("hello from js!");

console.log("hello from js!");

const gender = document.getElementById("gender");

if (gender) {
    gender.addEventListener("click", () => {
        gender.textContent =
            gender.textContent === "Male"
                ? "Female"
                : "Male";
    });
}