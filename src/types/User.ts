export  interface User {
  id: string | number;
  name: string;
  email: string;
  role: string;
  cellphone: string;
}

enum ROLE {
  ADMIN,
  WAITRESS,
  BARTENDER,
  COOK
}