import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "../firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retrieveLapars(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  //   console.log("Query result:", data);
  // console.log(data.length < 0);
  // console.log(data.length > 0);
  if (data.length > 0) {
    // user sudah ada
    return callback({
      status: "error",
      message: "User already exists",
    });
  }

  try {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";

    await addDoc(collection(db, "users"), userData);

    callback({
      status: "success",
      message: "User registered successfully",
    });
  } catch (error) {
    callback({
      status: "error",
      message: "Failed to register user",
    });
  }
}
