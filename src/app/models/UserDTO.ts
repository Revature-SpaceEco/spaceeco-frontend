export interface UserDTO {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  qrCode: string;
}

export interface RegisterDTO {
  firstName: string;
  lastName: string;  
  username: string;
  password: string;
  email: string;
}
