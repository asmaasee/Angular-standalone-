// src/app/firebase.config.ts

import { initializeApp } from "firebase/app";

// ✅ Export علشان تستخدميه في app.config.ts أو أي مكان تاني
export const firebaseConfig = {
  apiKey: "AIzaSyB8UcWer8A_jr-SuDLxa-uNN1ZiJw5NHvs",
  authDomain: "me-new-462b2.firebaseapp.com",
  projectId: "me-new-462b2",
  storageBucket: "me-new-462b2.appspot.com", // ✅ لاحظ: كان مكتوب غلط!
  messagingSenderId: "364280030827",
  appId: "1:364280030827:web:ad7f692e582853acc3332e"
};

// (اختياري) تهيئة Firebase هنا لو مش بتعمليها في مكان تاني
initializeApp(firebaseConfig);
