let userName;

userName = 34;

let userID: number | string = 0;

type User = {
  name: string;
  age: number;
  id: number | string;
};

let user: User;

user = {
  name: 'Max',
  age: 34,
  id: 1,
};

let hobbies: Array<string>;
hobbies = ['a'];

function add(a: number, b: number): number {
  return a + b;
}

type AddFn = (a: number, b: number) => number;

function calucalte(a: number, b: number, calcFn: AddFn): number {
  return calcFn(a, b);
}

console.log(calucalte(2, 5, add));

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: '123',
  email: 'example@example.com',
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(creds);
login(new AuthCredentials());

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

// one of type, not merged
// type AppAdmin = Admin | AppUser;

type AppAdmin = Admin & AppUser;
let admin: AppAdmin = {
  permissions: ['login'],
  userName: 'a',
};

type Role = 'admin' | 'user' | 'editor';

function performAction(action: string, role: Role) {
  if (role === 'admin') {
    // ...
  }
}
