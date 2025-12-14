import React, { useState } from "react";

interface User {
    name: string;
    email: string;
}

interface Props {
    user: User
    onUpdate: (user: User) => void;
}

interface State {
    name: string;
    email: string;
}    

function UserProfileEditor({ user, onUpdate }: Props) {
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onUpdate({
            ...user,
            name: name,
            email: email,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Email:</label>
            
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update Profile</button>
        </form>
    );
}

export default UserProfileEditor;