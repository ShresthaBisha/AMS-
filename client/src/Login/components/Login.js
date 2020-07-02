import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import MyInput from 'my-input-react'
import { getAccessToken } from '../../utils'
import { login } from '../actions'
import '../static/css/styles'

const Login = props => {
    const dispatch = useDispatch()
    const { loginState, loginError } = props.loginReducer
    const [localStore, setLocalStore] = useState({})

    useState(() => {
        if (getAccessToken())
            props.history.push('/class-room')
    }, [])

    const _login = async () => {
        const res = await dispatch(login(localStore))

        if (res.value.status === 200) {
            props.history.push('/')
        }
    }

    const handler = (me, value) => {
        localStore[me] = value
        setLocalStore(localStore)
    }

    const handleEnter = (key) => {
        if (key === 'Enter') _login()
    }

    return (
        <div className='container-fluid' style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="row my-auto" style={{ paddingTop: '25vh' }}>
                <div className="col-4 offset-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className='display-3'>Login</h1>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <MyInput
                            me='username'
                            handler={handler}
                            placeHolder='Username'
                            className="form-control mt-1"/>
                    </div>

                    <div className="row">
                        <MyInput
                            me='password'
                            type='password'
                            handler={handler}
                            placeHolder='Password'
                            onKeyPress={handleEnter}
                            className="form-control mt-2"/>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center mt-4">
                            {
                                loginState === 1 &&
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            }

                            {
                                loginState !== 1 &&
                                <button
                                    onClick={_login}
                                    className='btn btn-outline-success btn-block'>
                                    Login
                                </button>
                            }

                            {
                                loginState === 3 &&
                                <div className="alert alert-danger alert-dismissible fade show mt-1" role="alert">
                                    {loginError}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({
    loginReducer: state.loginReducer
}))(Login)
