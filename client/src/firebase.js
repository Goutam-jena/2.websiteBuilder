// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries
// // import {getAuth, GoogleAuthProvider} from "firebase/auth"
// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
// //   authDomain: "genwebai-dbb06.firebaseapp.com",
// //   projectId: "genwebai-dbb06",
// //   storageBucket: "genwebai-dbb06.firebasestorage.app",
// //   messagingSenderId: "991900800026",
// //   appId: "1:991900800026:web:84b905ccab6e1ea2c16da3"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth= getAuth(app)
// // const provider=new GoogleAuthProvider()

// // export {auth,provider}











// import { initializeApp } from "firebase/app";
// import { 
//     getAuth, 
//     GoogleAuthProvider, 
//     setPersistence, 
//     browserLocalPersistence 
// } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "genwebai-dbb06.firebaseapp.com",
//   projectId: "genwebai-dbb06",
//   storageBucket: "genwebai-dbb06.firebasestorage.app",
//   messagingSenderId: "991900800026",
//   appId: "1:991900800026:web:84b905ccab6e1ea2c16da3"
// };

// // 1. Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // 2. Initialize Auth
// const auth = getAuth(app);

// // 3. Set Persistence (This keeps the user logged in even if they refresh the page)
// setPersistence(auth, browserLocalPersistence);

// // 4. Set Up Google Provider
// const provider = new GoogleAuthProvider();

// // 5. Force the "Choose Account" screen every time (Fixes the blank popup issue)
// provider.setCustomParameters({
//   prompt: 'select_account'
// });

// export { auth, provider };





// import { initializeApp } from "firebase/app";
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   setPersistence, 
//   browserLocalPersistence 
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "genwebai-dbb06.firebaseapp.com",
//   projectId: "genwebai-dbb06",
//   storageBucket: "genwebai-dbb06.firebasestorage.app",
//   messagingSenderId: "991900800026",
//   appId: "1:991900800026:web:84b905ccab6e1ea2c16da3"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// setPersistence(auth, browserLocalPersistence)
//   .catch(err => console.error(err));

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export { auth, provider };






import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbOz8wBybqQegJ9daTprtEG-DMJvqCk4g",
  authDomain: "websitegenrator-775d8.firebaseapp.com",
  projectId: "websitegenrator-775d8",
  storageBucket: "websitegenrator-775d8.firebasestorage.app",
  messagingSenderId: "191626027432",
  appId: "1:191626027432:web:d7cbeffa498296f61a7d9d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };