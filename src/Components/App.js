import { useState } from "react";
import FormAddFriend from "./FormAddFriend";
import ListOfFriends from "./ListOfFriends";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { initialFriends } from "../data";
function App() {
    const [addFriend, setAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectFriend, setSelectFriend] = useState(null);
    const handleAddFriend = () => {
        setAddFriend((friend) => !friend);
    };

    const handleAddingNewFriend = (friends) => {
        setFriends((friendList) => [...friendList, friends]);
        setAddFriend(false);
    };
    const handleSelectFriend = (friend) => {
        setSelectFriend((cur) => (cur?.id !== friend.id ? friend : null));
    };
    const handleSplitValue = (value) => {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectFriend(null);
    };
    return (
        <div className="app">
            <div className="sidebar">
                <ListOfFriends
                    friends={friends}
                    onSelection={handleSelectFriend}
                    selectFriend={selectFriend}
                />
                {addFriend && (
                    <FormAddFriend addNewFriend={handleAddingNewFriend} />
                )}
                <Button handleClick={handleAddFriend}>
                    {addFriend ? "close" : "Add friend"}
                </Button>
            </div>
            {selectFriend && (
                <FormSplitBill
                    selectFriend={selectFriend}
                    handleSplitValue={handleSplitValue}
                />
            )}
        </div>
    );
}

export default App;
