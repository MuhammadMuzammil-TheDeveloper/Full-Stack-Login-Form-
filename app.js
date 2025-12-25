const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyBMAGJs8GeHXQ53LHrf7dKzhGC4XM3TGhM",
  authDomain: "practiceloginform.firebaseapp.com",
  projectId: "practiceloginform",
  storageBucket: "practiceloginform.firebasestorage.app",
  messagingSenderId: "922779861062",
  appId: "1:922779861062:web:bf300c33086ca41a4cca47"
};

/* INIT */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* SIGNUP */
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("signupForm").reset();
      showPopup("✅ Thank you! Signup successful");
      // alert("✅ Signup successful");
    })
    .catch((error) => {
      alert(error.message);
    });
});

/* LOGIN */
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      document.getElementById("loginForm").reset();
      showPopup("✅ Thank you! Login successful");
      // alert("✅ Login successful");
    })
    .catch((error) => {
      alert(error.message);
    });
});
function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popup.style.display = "flex"; // show popup
}

// Close popup when click X
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// Close popup when click outside content
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  if (e.target === popup) popup.style.display = "none";
});
