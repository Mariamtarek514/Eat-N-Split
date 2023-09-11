import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectFriend, handleSplitValue }) => {
    const [bill, setBill] = useState("");
    const [paidBYUser, setPaidByUser] = useState("");
    const [whoPay, setWhoPay] = useState("user");
    const paidByFriend = bill ? bill - paidBYUser : "";
    const handleBaidByUser = (e) => {
        setPaidByUser(
            Number(e.target.value) > bill ? paidBYUser : Number(e.target.value)
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidBYUser) return;
        handleSplitValue(whoPay === "user" ? paidBYUser : -paidBYUser);
    };
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split the bill with {selectFriend.name}</h2>
            <label>💰Bill value </label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />
            <label>🧍🏻 Your expense </label>
            <input
                type="number"
                value={paidBYUser}
                onChange={(e) => handleBaidByUser(e)}
            />
            <label>👫 {selectFriend.name}'s expense </label>
            <input type="text" disabled value={paidByFriend} />
            <label>🤑 who is paying the bill?</label>
            <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
                <option value="user">you</option>
                <option value="friend">{selectFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
};

export default FormSplitBill;
