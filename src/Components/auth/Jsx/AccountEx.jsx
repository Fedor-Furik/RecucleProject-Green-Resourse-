import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import { auth } from '../../../../firebase';

import "../Scss/AccountEx.scss"

export default function AccountEx() {
    let navigate = useNavigate()
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) =>{
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });
    return() => {
        listen()
    }
  }, []);
  function userSignOut(){
    signOut(auth)
    .then(() => {
        navigate("/SignIn")
        console.log("success")
    })
    .catch((e) => {
        console.log(e)
    })
  }

  return (
    <div className='out'>
        {authUser ?  (
            <div className='d'>
                {/* <p>{`Signed in as ${authUser.email}`}</p> */}
                <h2>Вы уверенны что</h2>
                <h2>хотите выйти?</h2>
                <div className="fl">
                <button onClick={userSignOut}>Да</button>
                <NavLink className="ss"to="/Profile"><button>Нет</button></NavLink>
                </div>
                
            </div>
        ) : (
            <p>.</p>
        )}
    </div>
    )
}
export {AccountEx}