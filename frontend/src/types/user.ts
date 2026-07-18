export interface UserProfile {
  uid:string;
  name:string;
  email?:string;
  anonymous:boolean;
  createdAt?:unknown;
}