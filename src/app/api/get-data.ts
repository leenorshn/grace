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
  const data = await fetch(
    `https://grace-w4ax2xiweq-ww.a.run.app/post/${username}`,
    {
      method: "GET",
    }
  );
  const dd = await data.json();

  var t = dd.filter((d) => d.title == username);
  console.log(t);

  return t;
}

export async function createPost(title: string, detail: string) {
  const data = await fetch("https://grace-w4ax2xiweq-ww.a.run.app/post", {
    method: "post",
    body: JSON.stringify({ title: title, detail: detail }),
  });
  const dd = await data.json();

  console.log(dd);

  return dd;
}
