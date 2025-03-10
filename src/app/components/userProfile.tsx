/*import React, { useState } from "react";
import { User } from "../types/User";

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  // Adjust the type to include the nested "login.password"
  const [infoType, setInfoType] = useState<keyof User | "street" | "password">("name");

  const infoMap: Record<string, string> = {
    name: `Hi, My name is ${user.name.first} ${user.name.last}`,
    email: `My email is ${user.email}`,
    dob: `I was born on ${user.dob.date.split("T")[0]}`, // Extract date only
    location: `I live in ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    street: `My address is ${user.location.street.number} ${user.location.street.name}`,
    phone: `Call me at ${user.phone}`,
    password: `My password is ${user.login.password}`, // Correct access to password
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-96">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      />
      <p className="text-gray-500 mt-3">{infoMap[infoType]}</p>

      <div className="flex gap-4 mt-4">
        <button onMouseEnter={() => setInfoType("name")}>👤</button>
        <button onMouseEnter={() => setInfoType("email")}>📧</button>
        <button onMouseEnter={() => setInfoType("dob")}>📅</button>
        <button onMouseEnter={() => setInfoType("location")}>📍</button>
        <button onMouseEnter={() => setInfoType("street")}>🏠</button>
        <button onMouseEnter={() => setInfoType("phone")}>📞</button>
        <button onMouseEnter={() => setInfoType("password")}>🔒</button>
      </div>
    </div>
  );
};

export default UserProfile;
*/

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { User } from "../types/User";

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  // Adjust the type to include the nested "login.password"
  const [infoType, setInfoType] = useState<keyof User | "street" | "password">("name");

  const infoMap: Record<string, string> = {
    name: `Hi, My name is ${user.name.first} ${user.name.last}`,
    email: `My email is ${user.email}`,
    dob: `I was born on ${user.dob.date.split("T")[0]}`, // Extract date only
    location: `I live in ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    street: `My address is ${user.location.street.number} ${user.location.street.name}`,
    phone: `Call me at ${user.phone}`,
    password: `My password is ${user.login.password}`, // Correct access to password
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-96">
      <Image
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        width={96} // Define width
        height={96} // Define height
        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      />
      <p className="text-gray-500 mt-3">{infoMap[infoType]}</p>

      <div className="flex gap-4 mt-4">
        <button onMouseEnter={() => setInfoType("name")}>👤</button>
        <button onMouseEnter={() => setInfoType("email")}>📧</button>
        <button onMouseEnter={() => setInfoType("dob")}>📅</button>
        <button onMouseEnter={() => setInfoType("location")}>📍</button>
        <button onMouseEnter={() => setInfoType("street")}>🏠</button>
        <button onMouseEnter={() => setInfoType("phone")}>📞</button>
        <button onMouseEnter={() => setInfoType("password")}>🔒</button>
      </div>
    </div>
  );
};

export default UserProfile;

