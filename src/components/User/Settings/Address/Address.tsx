import AddressForm from "./Address Form/AddressForm";
import styles from "./Address.module.scss";
import useAddress from "./useAddress";
import ViewAddresses from "./View Addresses/ViewAddresses";

const Address = () => {
  const {
    addresses,
    mode,
    setMode,
    selectedAddress,
    setSelectedAddress,
    handleDeleteAddresses,
    handleGetAddresses,
  } = useAddress();
  return (
    <div className={styles.addressCard}>
      <h1>
        {mode === "View"
          ? "Your Addresses"
          : mode === "Edit"
            ? "Your Addresses / Edit Address"
            : mode === "Add"
              ? "Your Addresses / Add Address"
              : ""}
      </h1>
      <div className={styles.addressContent}>
        {mode === "View" && (
          <ViewAddresses
            addresses={addresses ?? []}
            setSelectedAddress={setSelectedAddress}
            handleDeleteAddresses={handleDeleteAddresses}
            setMode={setMode}
          />
        )}
        {mode === "Edit" && selectedAddress && (
          <AddressForm
            address={selectedAddress}
            mode="Edit"
            setMode={setMode}
            handleGetAddresses={handleGetAddresses}
          />
        )}
        {mode === "Add" && (
          <AddressForm
            address={null}
            mode="Add"
            setMode={setMode}
            handleGetAddresses={handleGetAddresses}
          />
        )}
      </div>
    </div>
  );
};
export default Address;
