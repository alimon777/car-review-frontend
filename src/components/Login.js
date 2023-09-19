import { useRef, useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { faExclamationCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';

const LOGIN_URL = '/auth';

export default function Login() {
    const navigate = useNavigate();
    // const location = useLocation();
    const from = '/home';
    const userRef = useRef();
    const errRef = useRef();
    const [showPwd, setShowPwd] = useState(false);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const toggleShowPwd = () => {
        setShowPwd(!showPwd);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            console.log(user, pwd);
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <div className="flex flex-row justify-between h-screen bg-login-signup bg-cover">
            <div className="flex flex-col">
                <h1 className="text-8xl font-Ferretface text-white pl-5 pt-5">Ride Radar</h1>
                <h1 className="text-xl font-Outfit-Medium justify-end text-white pl-7 pt-2">Your Guide to the Perfect Ride</h1>
            </div>
            <div className="flex flex-col items-center justify-between h-screen w-[25rem] px-14 bg-gray-800">
                <div className="flex flex-col items-center justify-center h-screen w-full">
                    <h1 className="flex flex-row text-3xl text-center tracking-wide font-normal mb-10 font-Ethnocentric text-white">LOG <p className="pl-3 text-orange-500">IN</p></h1>
                    <div className={errMsg ? "flex flex-rows items-center p-2 h-10 w-full border border-red-600 rounded-[10px] bg-red-200 text-red-600  mb-2" : "h-0 w-0 absolute left-[-9999px]"}>
                        <FontAwesomeIcon icon={faExclamationCircle} className="h-4 p-2" />
                        <p ref={errRef} className="font-Outfit-Regular text-sm pl-1" aria-live="assertive">{errMsg}</p>
                    </div>
                    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                        <div>
                            <label className="tracking-wide font-Outfit-Light select-none text-white" htmlFor="username">username</label>
                            <input
                                className="mt-2 w-full h-12 px-3 py-2 rounded-[10px] shadow-sm focus:outline-none focus:ring focus:ring-black focus:ring-opacity-40"
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                placeholder="Enter your username"
                                spellCheck="false" />
                        </div>
                        <div>
                            <label className="tracking-wide font-Outfit-Light select-none text-white" htmlFor="password">password</label>
                            <div className={`mt-2 flex flex-row items-center w-full h-12 rounded-[10px] shadow-sm ${pwdFocus ? "ring ring-black ring-opacity-40" : ""}`}>
                                <input
                                    className="h-12 w-full px-3 py-2 rounded-l-[10px] outline-none"
                                    type={showPwd ? 'text' : 'password'}
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    value={pwd}
                                    required
                                    placeholder="Enter your password" />
                                <div className="flex bg-white w-10 h-12 rounded-r-[10px] items-center justify-center">
                                    <FontAwesomeIcon icon={showPwd ? faEyeSlash : faEye} className="text-gray-400 cursor-pointer border-gray-300" onClick={toggleShowPwd} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center pt-7 ">
                            <button
                                className=" border border-white hover:bg-orange-500 hover:border-orange-500 tracking-wider hover:bg-opacity-75  text-white font-Outfit-Bold py-3 px-7 rounded-[30px] focus:outline-none focus:shadow-outline select-none"
                                type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mb-10 gap-2 select-none text-white whitespace-nowrap">
                    <p>
                        Don't have an account?
                    </p>
                    <span className="block hover:text-orange-500 text-white">
                        <NavLink to="/register">Sign Up</NavLink>
                    </span>
                </div>

            </div>
        </div>
    );
}