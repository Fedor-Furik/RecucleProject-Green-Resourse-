import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import '../Scss/NameC.scss'


export default function NameC() {
        let navigate = useNavigate()
        const [name,setName] = useState("")
        const [seName,setSeName] = useState("")
        const [error, setError] = useState("")

        function Change(e){
            e.preventDefault()
            if (name == "" || seName == ""){
                setError("Заполните поля")
                return
            }
            localStorage.setItem("name",name.charAt(0).toUpperCase() + name.slice(1))
            localStorage.setItem("seName",seName.charAt(0).toUpperCase() + name.slice(1))
            navigate("/Profile")
        }
        function Def(e){
            e.preventDefault()
            return
        }
        return (
            <div className='AuthSignIn'>
                <form autoComplete="off" onSubmit={Def}>
                    {error ? <p id='error' className='error'>{error}</p> : ""}
                    <input
                        maxLength="15"
                        id="i1"
                        placeholder='Введите имя'
                        className='firstI'
                        type="text"
                        value={name}
                        autoFocus
                        onChange={(e)=>setName(e.target.value)}
                        autoComplete="off"
                    />
                    <input
                        maxLength="15"
                        id="i1"
                        placeholder='Введите фамилию'
                        className='firstI'
                        type="text"
                        value={seName}
                        onChange={(e)=>setSeName(e.target.value)}
                        autoComplete="off"
                    />
                    <button className='loginBut'><NavLink onClick={Change} className="Nav">Перейти в профиль</NavLink></button>
                </form>
            </div>
        )
    }
export {NameC}


