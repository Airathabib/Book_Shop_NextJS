import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { logIn } from '@/redux/authSlice';
import { resetErrors } from '@/redux/authSlice';
import { LoginProps } from '@/interfaces/interfase';

import styles from './loginForm.module.css';


export default function LoginForm({setIsOpened}: LoginProps) {
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const emailError = useAppSelector((state) => state.auth.emailError);
const passwordError = useAppSelector((state) => state.auth.passwordError);
const isLogged = useAppSelector((state) => state.auth.loggedIn);
const { push } = useRouter();
const dispatch = useAppDispatch();

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetErrors());
    dispatch(logIn({ email, password }));
}

useEffect(() => {
    if (isLogged) {
        setIsOpened(false);
        push('/profile');
    }
}, [isLogged, setIsOpened, push]);

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.title}>Log in</h2>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" onChange={handleEmailChange} />
                {emailError&&(<span className={styles.error}>{emailError}</span>)}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" onChange={handlePasswordChange} />
                {passwordError&&(<span className={styles.error}>{passwordError}</span>)}
            </div>
            <button type="submit" className={styles.button}>log in</button>
        </form>
    )
}
