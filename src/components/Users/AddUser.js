import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import Errormodel from '../UI/Errormodel'
import { useState } from 'react'
const AddUser=(props)=>{
   const  [enteredinput,setenteredinput]=useState('');
   const  [enteredage,setenteredage]=useState('');
   const  [error,setError]=useState('');
    const onsubmithandler=(event)=>{
        event.preventDefault();
        
        if(enteredinput.trim().length===0|| enteredage.trim(0).length===0){
            setError({
                title:'invalid input',
                message:'Please Enter a valid name and age (non-empty values)'
            })
            return;
        }
        //+ sign before enteredage to forcefully convert it from string to number
        if(+enteredage<1){
            setError({
                title:'invaluid Age',
                message:'please Enter a valid Age (>0)'
            }
            )
        return;}
        props.onAddUser(enteredinput,enteredage)
        // console.log(enteredinput,enteredage);
        setenteredage('');
        setenteredinput('');
    }
    const onchangeinputhandler=(event)=>{
       setenteredinput(event.target.value);
    }
    const onchangeagehandler=(event)=>{
        setenteredage(event.target.value);
    }

    const errorhandler=()=>{
        setError(null);
    }
 return(
    <div>
        {error && <Errormodel title={error.title} message={error.message} onConfirm={errorhandler}/>}
    <Card className={styles.input}>
    <form onSubmit={onsubmithandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredinput} onChange={onchangeinputhandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredage} onChange={onchangeagehandler}   />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
 )
}
export default AddUser;