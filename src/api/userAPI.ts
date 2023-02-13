import { userObjDTO } from "@/models/user";
import { getFirestoreRefObject } from "./pokemonAPI";

const saveUserData = async (user: userObjDTO) => {
  if (!user) return;
  const { uid, displayName, providerId, metadata } = user;
  const { collection } = await getFirestoreRefObject();

  const initObj = {
    userId: uid,
    userName: displayName,
    providerId: providerId,
    totalPokemonNumber: 0,
    lastLoggedIn: metadata.lastSignInTime,
    lastDrawTime: metadata.lastSignInTime,
    pokemonList: [],
  };

  try {
    const userRef = collection.where("userId", "==", uid);

    if ((await userRef.get()).empty) collection.add(initObj);
  } catch (err) {
    console.log(err);

    throw new Error("사용자 DB 저장에 실패");
  }
};
export { saveUserData };
