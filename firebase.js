import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMAGJs8GeHXQ53LHrf7dKzhGC4XM3TGhM",
  authDomain: "practiceloginform.firebaseapp.com",
  projectId: "practiceloginform",
  storageBucket: "practiceloginform.firebasestorage.app",
  messagingSenderId: "922779861062",
  appId: "1:922779861062:web:bf300c33086ca41a4cca47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* REGISTER */
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("REGISTERED:", userCredential.user);
      alert("✅ Account Created");
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});

/* LOGIN */
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("LOGGED IN:", userCredential.user);
      alert("✅ Login Successful");
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
});
