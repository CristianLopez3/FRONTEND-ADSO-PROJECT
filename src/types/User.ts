export  interface User {
  id?: string | number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  identification: string;
  cellphone: string;
  role: string;
}

enum ROLE {
  ADMIN,
  WAITRESS,
  BARTENDER,
  COOK
}