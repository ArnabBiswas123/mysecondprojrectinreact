import styles from './UserList.module.css'
import Card from '../UI/Card'

const UserList=(props)=>{
    console.log('user')
    return (
    <Card className={styles.users}>
    <ul>
     {props.users.map((user) => (
        
         <li key={user.id}>
            {user.name} 
            ({user.age} Years Old);
         </li>
    ))}
</ul>
</Card>);
};
export default UserList;