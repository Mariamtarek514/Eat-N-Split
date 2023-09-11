import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ addNewFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !image) return;
        const id = crypto.randomUUID();
        const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
        addNewFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48?u=499476");
    };
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="friendName">👫 Friend name</label>
            <input
                type="text"
                id="friendName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="imageUrl">🌄 Image URL </label>
            <input
                type="text"
                id="imageUrl"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;
