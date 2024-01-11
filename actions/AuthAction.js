import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";



export const addData = async (data) => {
  try {
    const userData = await getData('admin');

    if (userData) {
      const dataBaru = {
        ...data,
        uid: userData.uid,
      };

      await FIREBASE.database()
        .ref('dataPoster/' + userData.uid)
        .push(dataBaru);

      console.log('Data added successfully');
    } else {
      Alert.alert('Error', 'Login Terlebih Dahulu');
    }
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("users/" + success.user.uid)
      .set(dataBaru);
    //Local storage(Async Storage)
    storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);

    // Retrieve user data from the database
    const userRef = FIREBASE.database().ref(`/users/${success.user.uid}`);
    const userSnapshot = await userRef.once("value");
    const userData = userSnapshot.val();

    if (userData) {
      // Local storage (Async Storage)
      await storeData("user", userData);

      return userData;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};


export const logoutUser = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};




export const deleteNote = async (noteId) => {
  try {
    const userData = await getData("user");

    if (!userData) {
      Alert.alert("Error", "Login Terlebih Dahulu");
      return;
    }

    const noteRef = FIREBASE.database().ref(`notes/${userData.uid}/${noteId}`);
    const snapshot = await noteRef.once("value");
    const existingNote = snapshot.val();

    if (!existingNote) {
      console.log("Note not found");
      return;
    }

    // Hapus catatan dari database
    await noteRef.remove();
    console.log("Note deleted successfully");
  } catch (error) {
    throw error;
  }
};

export const registerAdmin = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("admins/" + success.user.uid)
      .set(dataBaru);
    //Local storage(Async Storage)
    storeData("admin", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

export const loginAdmin = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
    const resDB = await FIREBASE.database()
      .ref("/admins/" + success.user.uid)
      .once("value");

    if (resDB.val()) {
      // Local storage (Async Storage)
      await storeData("admin", resDB.val());
      return resDB.val();
    } else {
      throw new Error("Admin data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

export const editProfile = async (updatedProfile) => {
  try {
    // Mendapatkan data user dari local storage
    const userData = await getData('user');

    // Menggabungkan data user dengan data profil yang diperbarui
    const updatedUserData = {
      ...userData,
      ...updatedProfile,
    };

    // Menyimpan data profil yang diperbarui ke local storage
    await storeData('user', updatedUserData);

    // Mengupdate data profil di Firebase
    const userRef = FIREBASE.database().ref(`/users/${userData.uid}`);
    await userRef.update(updatedProfile);

    // Menampilkan pesan sukses
    Alert.alert('Success', 'Profile updated successfully');
  } catch (error) {
    // Menampilkan pesan kesalahan jika terjadi error
    Alert.alert('Error', 'Failed to update profile');
    console.error(error);
  }
};