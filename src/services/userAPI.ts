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
  if (!user) {
    throw new Error("사용자 정보가 없습니다.");
  }

  try {
    const { uid, displayName, providerId, metadata } = user;
    const { collection } = await getFirestoreRefObject();

    const initObj = {
      userId: uid,
      userName: displayName,
      providerId: providerId,
      totalPokemonNumber: 0,
      lastLoggedIn: new Date(),
      lastDrawTime: new Date(),
      pokemonList: [],
    };

    const userRef = collection.where("userId", "==", uid);

    if ((await userRef.get()).empty) collection.add(initObj);
  } catch (err) {
    console.log(err);
    throw new Error("사용자 DB 저장에 실패 했습니다.");
  }
};

/** firestore에서 유저 정보를 업데이트합니다. */
const updateUserSignInTime = async (user: userObjDTO) => {
  if (!user) {
    throw new Error("사용자 정보가 없습니다.");
  }
  try {
    const { uid, metadata } = user;
    const { collection } = await getFirestoreRefObject();

    const userRef = collection.where("userId", "==", uid);

    const snapshot = await userRef.get();

    if (snapshot.empty) {
      throw new Error("해당 유저 정보가 없습니다.");
    }

    const userDoc = snapshot.docs[0];

    const updatedData = {
      lastLoggedIn: new Date(),
    };

    await userDoc.ref.update(updatedData);
  } catch (err) {
    console.log(err);

    throw new Error("사용자 DB 업데이트에 실패했습니다.");
  }
};

/** firestore에서 lastDrawTime 정보를 업데이트합니다. */
const updateUserDrawTime = async () => {
  try {
    const { uid, collection } = await getFirestoreRefObject();
    const userRef = collection.where("userId", "==", uid);

    const snapshot = await userRef.get();

    if (snapshot.empty) {
      throw new Error("해당 유저 정보가 없습니다.");
    }

    const userDoc = snapshot.docs[0];

    const updatedData = {
      lastDrawTime: new Date(),
    };

    await userDoc.ref.update(updatedData);
  } catch (err) {
    console.log(err);

    throw new Error("사용자 DB 업데이트에 실패했습니다.");
  }
};

export { saveUserData, updateUserSignInTime, updateUserDrawTime };
