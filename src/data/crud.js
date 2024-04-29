import { db } from "./fire.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";

const collectionName = "toys";
const toystCollectionRef = collection(db, collectionName);

async function getToys() {
  const toysCollection = toystCollectionRef;
  const toysSnapshot = await getDocs(toysCollection);
  //   console.log("getToys: snapshot is", toysSnapshot);
  const toysList = toysSnapshot.docs.map((doc) => withKey(doc));
  return toysList;
}
function withKey(doc) {
  let id = doc.data();
  id.key = doc.id;
  return id;
}
async function addToy(toys) {
  await addDoc(toystCollectionRef, toys);
}

async function deleteToy(key) {
  const docRef = doc(toystCollectionRef, key);
  deleteDoc(docRef);
}
async function editToy(key, updatedToy) {
  const docRef = doc(toystCollectionRef, key);
  await updateDoc(docRef, updatedToy);
}

export { getToys, deleteToy, addToy, editToy };
