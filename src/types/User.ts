export  interface User {
  id?: string | number | null;
  name: string;
  lastName: string;
  cellphone: string;
  identification: string;
  email: string;
  password: string;
  role: string;
}

// enum ROLE {
//   ADMIN,
//   WAITRESS,
//   BARTENDER,
//   COOK
// }