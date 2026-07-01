export interface SignInDTO {
  email: string;
  password: string;
}
export interface SignUpDTO {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
export type ChangeMyDetailsDTO = {
  fullName: string;
  phone: string;
  dateOfBirth: string;
};
