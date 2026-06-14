export interface AddressType {
  id: number;
  name: string;
  flatHouseBuilding: string;
  city: string;
  state: string;
  country: string;
  mobileNumber: string;
  alternativeMobileNumber?: string;
  pincode: string;
  isDefault?: boolean;
}

 export interface IAddressForm{
   mode: "add" | "edit";
  initialData?: AddressType;
  onSubmit: (data: AddressType) => void;
  onCancel: () => void;
 }

  export interface RequestBuilderProps {  
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  data?: object;
}