import type { Dispatch, SetStateAction } from "react";
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

export interface IUserListProps {
  users: UserData[];
  handleToggleFav: (id: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  handleDeleteUser: (id: string) => void;
}

export interface IUserCardProps {
  user: UserData;
  handleToggleFav: (id: string) => void;
  handleDeleteUser: (id: string) => void;
}

export interface IUpdateUserPayload {
  fullName: string;
  jobTitle: string;
  status: string;
  avatarUrl: string;
}

export interface IUploadResponse {
  url: string;
}