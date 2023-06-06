import { Book } from '../interfaces/book.interface';
import { db } from '../utils/firebaseConfig';
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
// import { v4 } from "uuid";

const booksRef = collection(db, 'books');

// export const getAllBooks = async () => {
//   const q = query(booksRef);
//   const querySnapshot = await getDocs(q);
//   const data:any = []

//   querySnapshot.forEach((doc) => {
//     data.push(doc.data());
//   });

//   return data;
// };

export const getAllBooks = async () => {
  const booksSnapshot = await getDocs(booksRef);
  const booksData: Book[] = [];

  booksSnapshot.forEach((doc) => {
    const bookData = doc.data() as Book; // Cast the document data to the Book type
    booksData.push(bookData);
  });

  // console.log("booksData", booksData);
  return booksData;
};

// GET
// const getAllPurchasesByUserId = async (id) => {
//   const q = query(purchaseRef, where("user_id", "==", id));
//   const querySnapshot = await getDocs(q);
//   const data = [];

//   querySnapshot.forEach((doc) => {
//     data.push(doc.data());
//   });
//   return data;
// };

// const getPurchaseById = async (id) => {
//   console.log("id", id);
//   const q = query(purchaseRef, where("uid", "==", id));
//   const querySnapshot = await getDocs(q);
//   const data = [];

//   querySnapshot.forEach((doc) => {
//     data.push(doc.data());
//   });
//   return data;
// };

// // POST
// const addPurchase = async (items) => {
//   items.forEach(async (item) => {
//     const uid = v4();
//     const newItem = {
//       ...item,
//       uid: uid,
//       available: true,
//     };
//     await setDoc(doc(db, "purchases", uid), newItem);
//   });
// };

// // UPDATE

// const updatePurchaseByAvailable = async (purchase, id) => {
//   const { available, ...rest } = purchase;

//   const purchaseUpdated = {
//     ...rest,
//     uid: id,
//     available: false,
//   };
//   const purchases = doc(db, "purchases", id);

//   await updateDoc(purchases, purchaseUpdated);
// };
