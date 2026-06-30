import type { ReactNode } from "react";

export interface IModal {
  children: ReactNode;
  handleCloseModal: () => void;
}

export interface IPaginationButtons {
  handleChangeReviewsCurrentPage: (page: number) => void;
  reviewsCurrentPage: number;
  reviewsTotalPages: number;
}

export type INavbar = {
  search?: string;
  setSearch?: (search: string | undefined) => void;
};

export type IProtectedRoute = {
  children: ReactNode;
  search?: string;
  setSearch?: (search: string | undefined) => void;
};

export type IHome = {
  search: string | undefined;
};

export type FooterCategory = {
  id: string | number;
  title?: string;
  items: string[];
};

export type FooterCategories = FooterCategory[];
