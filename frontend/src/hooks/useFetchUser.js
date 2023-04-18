import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const useFetchUser = (uid) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (uid) {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserData();
  }, [uid]);

  return userData;
};

export default useFetchUser;
