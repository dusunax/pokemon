import { dbService } from "@/common/fbase";
import { GetUserRef, userObjDTO } from "@/models/user";

/** 유저Ref 관련 object를 리턴합니다. */
export async function getFirestoreRefObject(): Promise<GetUserRef> {
  const collectionName = "pokemonDB";

  const uid = sessionStorage.getItem("user");
  const collection = dbService.collection(collectionName);
  const userRef = collection.where("userId", "==", uid);
  const user = (await userRef.get()).docs[0];

  if ((await userRef.get()).empty) return { uid, collection, userRef, user };
  if (!user) throw new Error("유저 리스트가 없습니다.");

  return { uid, collection, userRef, user };
}

/** firestore에 유저 정보를 저장합니다. */
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
