import './UserHome.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const UserHome = ({user}) => {

    const baseurl = process.env.REACT_APP_BASE_URL;
    const second = 'answers';
    const [userProfile, setUserProfile] = useState()



    useEffect(() => {
        console.log(user.id)

    axios.get(`${baseurl}/${second}/${user.id}`).then((res)=>{
        console.log('HEY RES.DATA ', res.data)
        setUserProfile(res.data)
    })
    }, [])


    return (
        <div>

            <p>Welcome {user.name}</p>

            <section>
                <p> Test results</p>
                <p>Disc Test </p>
                <p> Love Language Test</p>
                <p> </p>
            </section>

        
        </div>
    )
}

export default UserHome;