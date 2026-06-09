
export interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

export interface IUserDTO {
  id: number;
  fullName: string;
  jobTitle: string;
  status: string;
  isFavorite: boolean;
  avatarUrl: string;
}


export interface FilterTabsProps{
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  allCount: number;
}


export interface HeaderProps{
  count: number;
}

export interface ModalProps {
  changeModal: (id: number | null, confirmDelete: boolean) => void;
}


export interface SearchProps{
  search: string;
  setSearch: (value: string) => void;
};


export interface UserCardProps{
  person: User;

  handleToggleFavorite: (id: number, isFavorite: boolean) => void;
  loading: boolean;
  changeModal: (id: number | null, confirmDelete: boolean) => void;
};

export interface UserListProps{
  users: User[];

  handleToggleFavorite: (id: number, isFavorite: boolean) => void | Promise<void>;
  loading: boolean;
  changeModal: (id: number | null, confirmDelete: boolean) => void;
  navigate: (n: string) => void;
};