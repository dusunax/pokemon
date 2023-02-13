import { dbService } from "@/common/fbase";
import { userObjDTO } from "@/models/user";

const saveUserData = async (user: userObjDTO) => {
  if (!user) return;
  const { uid, displayName, providerId, metadata } = user;
  const db = dbService.collection("pokemonDB2");

  const initObj = {
    userId: uid,
    userName: displayName,
    providerId: providerId,
    totalPokemonNumber: 0,
    lastLoggedIn: metadata.lastLoginAt,
    lastDrawTime: metadata.lastLoginAt,
    pokemonList: [],
  };

  try {
    const userRef = db.where("userId", "==", uid);

    if ((await userRef.get()).empty) db.add(initObj);
  } catch (err) {
    console.log(err);

    throw new Error("사용자 DB 저장에 실패");
  }
};
export { saveUserData };
