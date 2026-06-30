export interface Address {
  id?: number;
  name: string;
  country: string;
  flatHouseBuilding: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  pincode: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export type Mode = "Add" | "Edit" | "View";

export type IAddressForm = {
  address: Address | null;
  mode: Mode;
  setMode: (mode: Mode) => void;
  handleGetAddresses: () => void;
};

export type IViewAddresses = {
  addresses: Address[];
  setSelectedAddress: (address: Address | null) => void;
  setMode: (mode: Mode) => void;
  handleDeleteAddresses: (address: Address) => void;
};
