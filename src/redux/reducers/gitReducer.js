import axios from 'axios'

const ACCOUNTS = 'ACCOUNTS';
const POST__USER = 'POST__USER';
const LOGIN__USER = 'LOGIN__USER';
const OUT__USER = 'OUT__USER';
const UPDATE__USER = 'UPDATE__USER';
const GET__USER = 'GET__USER';

const initialState = {
    accessoryData : [],
    postUser : [],
    loginUser: [],
    getUser: [],
    updateUser: [],
    isAuth: false,
    goods: []

};

const defFunc = (state = initialState, action) => {
    switch(action.type){
        case ACCOUNTS : {
            return {...state, accessoryData: action.accountsData}
        }
        case POST__USER : {
            return {...state, postUser: action.postUser}
        }
        case LOGIN__USER : {
            return {...state, loginUser: action.loginUser, isAuth: true}
        }
        case GET__USER : {
            return {...state, getUser: action.getUser }
        }
        case OUT__USER : {
            return {...state, isAuth: false}
        }
        case UPDATE__USER : {
            return {...state, updateUser: action.updateUser }
        }
        
        default: return state
    }
}

export const getAccGit = () => {
    return (dispatch) => {
        axios('/profile')
            .then(({data}) => dispatch({type: ACCOUNTS, accountsData: data}))
    }
}

export const getUser = (user) => {
    return (dispatch) => {
        const data = {
            email: user
        }
        axios({
            methot: 'get',
            url: 'http://localhost:8090/api/user',
            headers: {
                'Content-Type': 'application/json' 
            },
            data
            })
            .then(({data}) => {
                return dispatch({type: GET__USER, getUser: data})
        })
    }
}

export const postUser = (email, userName, password) => {
    const data = JSON.stringify({
        email: email,
        userName: userName,
        password: password
    })

    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:8090/api/users/registration',
            headers: {
                'Content-Type': 'application/json' 
            },
            data
        }).then(({data}) => dispatch({type: POST__USER, postUser: data}))
    }
}
export const  outUser = () => {
    return (dispatch) => {
        return dispatch({type: OUT__USER})
    }
}

export const loginUser = (userName, password) => {
    const data = JSON.stringify({
        userName: userName,
        password: password
    })
    localStorage.setItem('userToken', data)
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:8090/api/users/login',
            headers: {
                'Content-Type': 'application/json' 
            },
            data
        }).then(({data}) => {
            return dispatch({type: LOGIN__USER, loginUser: data})
        })
    }
}

export const updateUser = (lastname, name, userName, email, telephone, city, area, street, home, apartament, id) => {
    const data = JSON.stringify({
        lastname: lastname,
        name: name,
        userName: userName,
        email: email,
        telephone: telephone,
        city: city,
        area: area,
        street: street,
        home:home,
        apartament: apartament,
        id: id
    })
    console.log(data);
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:8090/api/user/update',
            headers: {
                'Content-Type': 'application/json' 
            },
            data
        }).then(({data}) => {
            console.log(data);
            return dispatch({type: UPDATE__USER, updateUser: data})
        
        })
    }

}
export default defFunc