import React from 'react'

export const Login = () => {

    return (
        <div className="login">
            <div className='initialize'>            
                <div className="initialize__selection">
                    <button className="initialize__selection__login-btn">
                        Log In
                    </button>
                    <button className="initialize__selection__register-btn">
                        Register
                    </button>
                </div>
                <div className="initialize__text">
                    Sign up, its FREE!
                </div>
                <form className="initialize__form">
                    <input classNamme="initialize__form__input" type="text" placeholder="e-mail"/>
                    <input classNamme="initialize__form__input" type="password" placeholder="password"/>
                    <button className="initialize__form__submit-btn">Submit</button>
                </form>

            </div>
        </div>
    )
}
