import { useRef, useState, useEffect } from "react";
import { faInfoCircle, faExclamationCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from '../api/axios';
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/;
// const REGISTER_URL = '/register';

const Register = () => {
    // const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const emailRef = useRef();
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidMail(MAIL_REGEX.test(mail));
    }, [mail])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const toggleShowPwd = () => {
        setShowPwd(!showPwd);
    };

    const toggleShowConfirmPwd = () => {
        setShowConfirmPwd(!showConfirmPwd);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validName || !validPwd || !validMail || !validMatch) {
            setErrMsg("Invalid Entry");
            return;
        }
        const email = emailRef.current.value;
        try {
            // const response = await axios.post(REGISTER_URL, JSON.stringify({ user, email, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(response?.data);
            // navigate('/');
            // //clear state and controlled inputs
            // //need value attrib on inputs for this
            console.log(user, pwd, matchPwd, email);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username already taken');
            } else {
                setErrMsg('Registration failed')
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
            <div className="flex flex-col items-center justify-center h-screen w-[25rem] px-14 bg-gray-800">
                <div className="flex flex-col items-center justify-center h-screen w-full">
                    <h1 className="flex flex-row text-3xl text-center tracking-wide font-normal mb-10 font-Ethnocentric text-white">REGIST<p className="text-orange-500">er</p></h1>
                    <div className={errMsg ? "flex flex-row items-center p-2 h-10 w-full border border-red-600 rounded-[10px] bg-red-200 text-red-600  mb-2" : "h-0 w-0 absolute left-[-9999px]"}>
                        <FontAwesomeIcon icon={faExclamationCircle} className="h-4 p-2" />
                        <p ref={errRef} className="font-Outfit-Regular text-sm pl-1" aria-live="assertive">{errMsg}</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className="space-y-3 w-full">
                        <div className="flex flex-col">
                            <label htmlFor="username" className=" tracking-wide font-Outfit-Light mb-2 text-white">
                                username :
                            </label>
                            <input
                                type="text"
                                id="username"
                                spellCheck="false"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className={`bg-slate-200 w-full h-12 px-3 py-2 rounded-[10px] shadow-sm focus:outline-none focus:ring 
                            ${validName ? "border-2 border-green-500 focus:border focus:ring-green-500 focus:ring-opacity-50" : "focus:ring-orange-200 focus:ring-opacity-40"} 
                            ${!validName && user ? "border-2 border-red-500 focus:border focus:border-red-500 focus:ring-red-500 focus:ring-opacity-70" : ""}`}
                            />
                            <div id="uidnote" className={userFocus && user && !validName ? "flex flex-row w-full text-xs rounded-lg bg-red-200 text-red-600 p-1 mt-[5px]" : "absolute left-[-9999px]"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-1 pl-1 pt-[2px] text-red-600" />
                                <p>
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className=" tracking-wide font-Outfit-Light mb-2 text-white">
                                email :
                            </label>
                            <input
                                type="text"
                                id="email"
                                ref={emailRef}
                                autoComplete="off"
                                spellCheck="false"
                                onChange={(e) => setMail(e.target.value)}
                                value={mail}
                                aria-invalid={validMail ? "false" : "true"}
                                aria-describedby="mailnote"
                                onFocus={() => setMailFocus(true)}
                                onBlur={() => setMailFocus(false)}
                                className={`bg-slate-200 w-full h-12 px-3 py-2 rounded-[10px] shadow-sm focus:outline-none focus:ring 
                            ${validMail ? "border-2 border-green-500 focus:border focus:ring-green-500 focus:ring-opacity-50" : "focus:ring-orange-200 focus:ring-opacity-40"} 
                            ${!validMail && mail ? "border-2 border-red-500 focus:border focus:border-red-500 focus:ring-red-500 focus:ring-opacity-70" : ""}`}

                            />
                            <p id="mailnote" className={mailFocus && mail && !validMail ? "text-xs rounded-lg bg-red-200 text-red-600 p-1 mt-[5px] " : "absolute left-[-9999px]"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-1 text-red-600" />
                                Use a valid mail id. (eg. abc@abd.com)
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className=" tracking-wide font-Outfit-Light mb-2 text-white">
                                password :
                            </label>
                            <div className={`flex flex-row items-center w-full h-12 rounded-[10px] shadow-sm ${pwdFocus && !pwd ? "ring ring-orange-200 ring-opacity-40" : ""} 
                        ${pwdFocus && validPwd ? "ring ring-green-500 ring-opacity-50" : ""} ${pwdFocus && !validPwd && pwd ? "ring ring-red-500 ring-opacity-70" : ""}`}>
                                <input
                                    className={`bg-slate-200 h-12 w-full px-3 py-2 rounded-l-[10px] outline-none ${!pwdFocus && validPwd ? "border-y-2 border-l-2 border-green-500 " : ""} 
                                ${!pwdFocus && !validPwd && pwd ? "border-y-2 border-l-2 border-red-500" : ""}`}
                                    type={showPwd ? 'text' : 'password'}
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <div className={`flex bg-slate-200 w-10 h-12 rounded-r-[10px] items-center justify-center ${!pwdFocus && validPwd ? "border-y-2 border-r-2 border-green-500" : ""} 
                            ${!pwdFocus && !validPwd && pwd ? "border-y-2 border-r-2 border-red-500" : ""}`}>
                                    <FontAwesomeIcon icon={showPwd ? faEyeSlash : faEye} className="text-gray-400 cursor-pointer border-gray-300" onClick={toggleShowPwd} />
                                </div>
                            </div>
                            <div id="pwdnote" className={pwdFocus && !validPwd ? "flex flex-row text-xs rounded-lg bg-red-200 text-red-600 p-1 mt-[5px]" : "absolute left-[-9999px]"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-1 pl-1 pt-[2px] text-red-600" />
                                <p>
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="confirm_pwd" className=" tracking-wide font-Outfit-Light mb-2 text-white">
                                confirm password :
                            </label>
                            <div className={`flex flex-row items-center w-full h-12 rounded-[10px] shadow-sm ${matchFocus && !matchPwd ? "ring ring-orange-200 ring-opacity-40" : ""} 
                        ${matchFocus && validMatch && matchPwd ? "ring ring-green-500 ring-opacity-50" : ""} ${matchFocus && !validMatch && matchPwd ? "ring ring-red-500 ring-opacity-70 " : ""}`}>
                                <input
                                    className={`bg-slate-200 h-12 w-full px-3 py-2 rounded-l-[10px] outline-none ${!matchFocus && validMatch && matchPwd ? "border-y-2 border-l-2 border-green-500" : ""} 
                                ${!matchFocus && !validMatch && matchPwd ? "border-y-2 border-l-2 border-red-500" : ""}`}
                                    type={showConfirmPwd ? 'text' : 'password'}
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <div className={`flex bg-slate-200 w-10 h-12 rounded-r-[10px] items-center justify-center ${!matchFocus && validMatch && matchPwd ? "border-y-2 border-r-2 border-green-500" : ""} 
                            ${!matchFocus && !validMatch && matchPwd ? "border-y-2 border-r-2 border-red-500" : ""}`}>
                                    <FontAwesomeIcon icon={showConfirmPwd ? faEyeSlash : faEye} className="text-gray-400 cursor-pointer border-gray-300" onClick={toggleShowConfirmPwd} />
                                </div>
                            </div>
                            <p id="confirmnote" className={matchFocus && !validMatch ? "text-xs rounded-lg bg-red-200 text-red-600 p-1 mt-[5px]" : "absolute left-[-9999px]"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-1 text-red-600" />
                                Must match the first password input field.
                            </p>
                        </div>

                        <div className="flex items-center justify-center pt-5">
                            <button type="submit"
                                className="border border-white hover:bg-orange-500 hover:border-orange-500 hover:bg-opacity-75 text-white tracking-wider hover:bg-opacity-75text-white font-Outfit-Bold py-3 px-7 rounded-[30px] focus:outline-none focus:shadow-outline select-none"
                            >Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mb-10 gap-2 text-white whitespace-nowrap">
                    <p>
                        Already have an account?
                    </p>
                    <span className="block hover:text-orange-500 text-white">
                        <NavLink to="/login">Sign In</NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;