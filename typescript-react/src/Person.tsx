import React, { useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    India = "India",
    UnitedStates = "United States",
    Brazil = "Brazil",
    Spain = "Spain",
}

export const User = (props: Props) => {

    // const {users, updateUser, deleteUser} = UserContext(UserContext);

    const [isShowInfo, setShowInfo] = useState<boolean | null>(true);
    const [UserBio, setUserBio] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserBio(event.target.value);
    }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // } 
    // example of handling form in typescript.

    const toggleInfo = () => {
      setShowInfo((prev) => !prev);  
    };
    return(
        <div>
            {isShowInfo &&  (
            <>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>This User {props.isMarried ? "is Married" : "is single"}</p>
                <p>Country of Origin: {props.country}</p>
            </>
            )}
            <p> 
                {" "}
                {props.name} Bio: {!UserBio ? "No Bio Avaliable" : UserBio} 
            </p>
            <input onChange={handleChange}/>
        <button onClick={toggleInfo}>Toggle Info</button>
        </div>
    );
}