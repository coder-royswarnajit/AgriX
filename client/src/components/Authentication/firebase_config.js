// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDi06XbuSNWgvNzp1GmsplAB55x-4QjBGY",
  authDomain: "agrix-abc93.firebaseapp.com",
  projectId: "agrix-abc93",
  storageBucket: "agrix-abc93.firebasestorage.app",
  messagingSenderId: "528221275885",
  appId: "1:528221275885:web:28b4f32a221cacba3faee4"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCFBiknU-qze_v_BX0Q3Xp5cM9BwVWhQm8",
//   authDomain: "growfarm2forgotpin.firebaseapp.com",
//   projectId: "growfarm2forgotpin",
//   storageBucket: "growfarm2forgotpin.appspot.com",
//   messagingSenderId: "713009273496",
//   appId: "1:713009273496:web:02b1f15da0894a380d4eed",
//   measurementId: "G-KF2K303PWP"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;