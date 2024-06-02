
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import Formaddfriend from './components/Formaddfriend';
import Friendlist from './components/Friendlist';


const initialFriends = [
  {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
  },
  {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
  },
  {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
  },
];

function App() {

  const [showAddfriend,setShowaddfriend]=useState(false)

  const [friends,setfriend]=useState(initialFriends)
  
  const [selectedFriend,setSelectedFriend]=useState(null)

 function handleAddFriend(friend){
  setfriend((friends)=>[...friends,friend])
  setShowaddfriend(false)
 }

 function handleSelected(friend){
  setSelectedFriend((selected)=>selected?.id === friend.id ? null : friend)

  setShowaddfriend(false)

 }


  function handleShowaddfriend(){
    setShowaddfriend((show)=>!show)
  }

 function handleSplitForm(value) {
  console.log(value)

  setfriend(friends=>friends.map((friend)=>friend.id === selectedFriend.id ? {...friend,balance:friend.balance + value }: friend))
  setSelectedFriend(null)
 }
  return (
    <div className="app">
      <div className='sidebar'>
        <Friendlist friend={friends} onSelected={handleSelected} onSelectedFriend={selectedFriend}/>
      {showAddfriend &&  <Formaddfriend onAddFriend={handleAddFriend}/>}
        <Button className='button' onClick={handleShowaddfriend}>{showAddfriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill onSelected={selectedFriend} onSplitBill={handleSplitForm} />}
    </div>
  );
}

export default App;
