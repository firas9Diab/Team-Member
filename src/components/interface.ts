export interface Address {
  id: number;
  name: string;
  country: string;
  flatHouseBuilding: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  pincode: string;
  city: string;
  state: string;
  isDefault: boolean;
}

export type Mode = "Add" | "Edit";

export type IAddressForm = {
  address: Address;
  mode: Mode;
  setMode: (mode: string) => void;
  handleGetAddresses: () => void;
};

export type IViewAddresses = {
  addresses: Address[];
  setSelectedAddress: (addresses: Address | null) => void;
  setMode: (mode: string) => void;
  handleDeleteAddresses: (addresses: Address) => void;
};
export type IRequestBuilder = {
  url: string;
  method: string;
  data?: unknown;
};
