import app from "@/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const firestore = getFirestore(app);

export default async function getAlertData(username: any) {
  const q = await query(
    collection(firestore, "alerts"),
    where("cause", "==", username)
  );
  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    cause: doc.data()["cause"],
    detail: doc.data()["detail"],
    position: doc.data()["position"],
    date: doc.data()["date"],
  }));

  return data;
}

export async function connectUser(username: any, password: any) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username),
    where("password", "==", password)
  );

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    username: doc.data()["password"],
  }));

  return data;
}
