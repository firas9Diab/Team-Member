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

export type AddressFormProps = {
  address: Address | null;
  mode: Mode;
};
export type AddressView = {
  addresses:Address[];
  setSelectedAddress:(addresses:Address|null)=>void;
setMode:(mode:string)=>void;
handleDeleteAddresses:(addresses:Address)=>void;
}