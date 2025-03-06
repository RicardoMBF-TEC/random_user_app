// src/types/User.ts

export interface User {
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    dob: {
      date: string; // Example: "1992-03-08T10:20:32.000Z"
      age: number;
    };
    location: {
      city: string;
      country: string;
    };
    phone: string;
    password: string; // This is usually not included, but if needed, add it
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }
  
  