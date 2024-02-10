import { Profile } from '../Profile/Profile'
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import userData from '../../userData.json'
import friends from '../../friends.json'
import transactions from "../../transactions.json";


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
            <TransactionHistory items={transactions} />
        </>
    );
};






