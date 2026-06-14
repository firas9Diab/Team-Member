import styles from "./Address.module.scss";
import AddressForm from "../AddressForm/AddressForm";
import useAddress from "../Hooks/useAddress";
import plusIcon from "../../Assets/plusIcon.svg";

const Address = () => {
  const {
    addresses,
    mode,
    setMode,
    selectedAddress,
    setSelectedAddress,
    handleAddAddress,
    handleEditAddress,
    handleDelete,
  } = useAddress();

  if (mode === "add") {
    return (
      <AddressForm
        mode="add"
        onSubmit={handleAddAddress}
        onCancel={() => setMode("list")}
      />
    );
  }

  if (mode === "edit" && selectedAddress) {
    return (
      <AddressForm
        mode="edit"
        initialData={selectedAddress}
        onSubmit={handleEditAddress}
        onCancel={() => {
          setMode("list");
          setSelectedAddress(undefined);
        }}
      />
    );
  }
  return (
    <>
      <div>
        <h2 className={styles.address}>Your Addresses</h2>

        {addresses.map((address) => (
          <div key={address.id} className={styles.card}>
            {address.isDefault && (
              <div>
                <p className={styles.default}>Default</p>
                <hr />
              </div>
            )}

            <div className={styles.data}>
              <h6 className={styles.name}>{address.name}</h6>
              <p>{address.flatHouseBuilding}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <p>{address.country}</p>
              <p>Phone number: {address.mobileNumber}</p>
            </div>

            <div className={styles.buttons}>
              <button
                onClick={() => {
                  setSelectedAddress(address);
                  setMode("edit");
                }}
              >
                Edit
              </button>
              <p>|</p>
              <button
                onClick={() => {
                  handleDelete(address.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.container}>
        <button className={styles.button} onClick={() => setMode("add")}>
          <img src={plusIcon} alt="plusIcon" />
          <p>Add address</p>
        </button>
      </div>
    </>
  );
};

export default Address;
