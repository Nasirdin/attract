import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getAccGit } from '../../redux/reducers/gitReducer';
import './style.scss';

const Login = () => {

    // const dispatch = useDispatch;
    return (
        <div className='login'>
            <a className='login__connect link-btn' href='https://github.com/login/oauth/authorize?client_id=d01ae6999206a3e285dc'>Connect</a>
        </div>
    )
}

export default Login;