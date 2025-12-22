const wrapper = document.querySelector(".wrapper");
const registerLink = wrapper.querySelector(".register-link");
const loginLink = wrapper.querySelector(".login-link");

registerLink.onclick = () => {
    wrapper.classList.add("active");
}
loginLink.onclick = () => {
    wrapper.classList.remove("active");
}