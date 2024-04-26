import { db } from "./fire.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";

async function getToys() {
  const toysCollection = collection(db, "toys");
  const toysSnapshot = await getDocs(toysCollection);
  //   console.log("getToys: snapshot is", toysSnapshot);
  const toysList = toysSnapshot.docs.map((doc) => withKey(doc));
  return toysList;
}
function withKey(doc) {
  let o = doc.data();
  o.key = doc.id;
  return o;
}

export { getToys };
