import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
      const [user, setUser]= useState([])
      // register with email and password 
      const createUser= (email,password)=>{
            return createUserWithEmailAndPassword(auth, email,password);
      }

      // login with email password 
      const loginUser=(email,password)=>{
            return signInWithEmailAndPassword(auth, email, password);
      }

      // logout 
      const logout=()=>{
            return signOut(auth);
      }

      useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                  console.log(currentUser);
                  setUser(currentUser)

            })
            return ()=>{
                  return unsubscribe;
            }
      },[])

      const authInfo = {
            user,
            createUser,
            loginUser,
            logout
      }

      return (
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;