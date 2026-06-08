export interface UserData {
  id: string;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

export interface ITabs {
  onSearch: (value: string) => void;
  setActiveTab: (value: string) => void;
  users: UserData[];
}

export interface IUserDTO {
  id: number;
  fullName: string;
  jobTitle: string;
  status: string;
  isFavorite: boolean;
  avatarUrl: string;
}

export interface IFavoriteDTO {
  id: number;
}