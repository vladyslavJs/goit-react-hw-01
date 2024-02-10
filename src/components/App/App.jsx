import { Profile } from '../Profile/Profile'
import { FriendList } from '../FriendList/FriendList';
import userData from '../../userData.json'
import friends from '../../friends.json'


export const App = () => {
    return (
        <>  
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <hr />
            <FriendList friends={friends} />
            <hr />
        </>
    );
};






