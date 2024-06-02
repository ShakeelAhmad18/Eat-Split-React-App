import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({onSelected ,onSplitBill}) => {
     const [bill,setBill]=useState('');

     const [paidByUser,setPaidByUser]=useState('');
     const paidbyFriend=bill ?  bill - paidByUser : ''


     const [Whoispay,setWhoispay]=useState('user')
   
   function handleSumbit(e){
     e.preventDefault();
     
     onSplitBill(Whoispay === 'user' ? paidbyFriend : -paidByUser)

   }

  return (
   <form className='form-split-bill' onSubmit={handleSumbit}>
    <h2>Split Bill with {onSelected.name}</h2>
     <label>💰 Bill value</label>
     <input type="text"  value={bill} onChange={(e)=>setBill(Number(e.target.value))} />

     <label>⛹🏾‍♀️ Your expense</label>
     <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

    <label>👬 {onSelected.name}'s expense</label>
    <input type="text" disabled value={paidbyFriend} />

    <label>🤑 Who is Pay the Bill</label>
    <select value={Whoispay} onChange={(e)=>setWhoispay(e.target.value)} >
        <option value="user">You</option>
        <option value="friend">{onSelected.name}</option>
    </select>

    <Button>Split bill</Button>
   </form>
  )
}

export default FormSplitBill
