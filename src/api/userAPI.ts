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
    const findById = db.where("userId", "==", uid);
    const isExist = (await findById.get()).docs;

    if (isExist.length > 0) {
      console.log(findById);
    } else {
      db.add(initObj);
    }
  } catch (err) {
    console.log(err);

    throw new Error("실패");
  }
};
export { saveUserData };
