import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const Home = () => {
  const dispatch = useDispatch()
  const { depositeMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between">
        <div className='text-left'>
          <h1>Hello Gajanan!</h1>
        </div>
        <div className="d-grid gap-2 d-md-block text-right">
          <h4 className="mb-2">Using Dispatch:</h4>
          <button className="btn btn-primary me-2" type="button" onClick={() => {dispatch(actionCreators.depositeMoney(100))}}>Deposite</button>
          <button className="btn btn-danger" type="button" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>Withdraw</button>
          
          <h4 className="mt-4 mb-2">Using BindActionCreators:</h4>
          <button className="btn btn-primary me-2" type="button" onClick={() => {depositeMoney(100)}}>Deposite</button>
          <button className="btn btn-danger" type="button" onClick={() => {withdrawMoney(100)}}>Withdraw</button>
        </div>
      </div>
    </div>
  )
}

export default Home
