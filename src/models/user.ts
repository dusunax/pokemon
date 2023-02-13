import firebase from "firebase/compat/app";

export interface userProps {
  isLoggedIn: boolean;
  userObj: userObjDTO;
}

export type userObjDTO = firebase.User | null;

export interface GetUserRef {
  uid: string | null;
  db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
  userRef: firebase.firestore.Query<firebase.firestore.DocumentData>;
  user: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;
}
