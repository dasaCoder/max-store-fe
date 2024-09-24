import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const authUser = async (email, password, signUp = false) => {
  try {
    if (signUp) {
      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      return createUserWithEmailAndPassword(auth, email, password);
      
    } else {
      return signInWithEmailAndPassword(auth, email, password);
      // await firebase.auth().signInWithEmailAndPassword(email, password);
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    return await firebase.auth().signOut();
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const user = await auth.currentUser;
    if (user) {
      const { displayName, email } = user;
      return { username: displayName, email };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

export const fetchUserAvatar = async (userName) => {
  try {
    const response = await fetch(`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${userName}`);
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    return imgUrl
  } catch (error) {
    console.log(error);
    throw error;
  }
}