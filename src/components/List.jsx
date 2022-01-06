import React, { useEffect, useState } from 'react';
import axios from 'axios';



const List = (props) => {
    // const { users } = props;
    // console.log("**" + users)
    const [loaded, setLoaded] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                console.log(res.data)
                setAllUsers(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {/* <p>{JSON.stringify(allUsers)}</p> */}
            {allUsers.map((user, index) => {
                return (
                    <p key={index}>
                        <h4>{user.firstName}</h4>
                    </p>
                )
            })}
        </div>
    )
}
export default List;