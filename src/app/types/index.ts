export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    quality: number;
    category: string;
    description: string;
}

export type Login = {
    email: string;
    password: string;
}

export type Register = {
    username: string;
    email: string;
    password: string;
}

export type LoginResponse = {
    token: string;
    role: "admin" | "member";
}