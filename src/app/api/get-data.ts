import app from "@/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firestore = getFirestore(app);

export default async function getAlertData() {
  const snapshot = await getDocs(collection(firestore, "alerts"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    cause: doc.data()["cause"],
    detail: doc.data()["detail"],
    position: doc.data()["position"],
    date: doc.data()["date"],
  }));

  return data;
}
