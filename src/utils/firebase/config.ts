// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // const firebaseConfig = {
//   apiKey: "AIzaSyCcu4WwaGfrwCuxvX9i4_oRo5uU3PK-nfU",
//   authDomain: "menueasy-f7860.firebaseapp.com",
//   projectId: "menueasy-f7860",
//   storageBucket: "menueasy-f7860.appspot.com",
//   messagingSenderId: "989619726987",
//   appId: "1:989619726987:web:b36ce852f79f119184028e",
// };

// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export async function uploadFile(file: File) {
//   const storageRef = ref(storage);
//   await uploadBytes(storageRef, file).then((snapshot) => console.log(snapshot));
//   const url = await  getDownloadURL(storageRef);
//   return url;
// }
