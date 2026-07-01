export interface AddressDTO {
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
  address: AddressDTO | null;
  mode: Mode;
  setMode: (mode: Mode) => void;
  handleGetAddresses: () => void;
};

export type IPasswordForm = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type IViewAddresses = {
  addresses: AddressDTO[];
  setSelectedAddress: (address: AddressDTO | null) => void;
  setMode: (mode: Mode) => void;
  handleDeleteAddresses: (address: AddressDTO) => void;
};
