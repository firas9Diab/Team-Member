import React from "react";
import type {  IViewAddresses } from "../../../../interface";
import styles from "../View Addresses/ViewAddresses.module.scss"

const ViewAddresses = ({ addresses,setSelectedAddress,handleDeleteAddresses,setMode }:  IViewAddresses) => {

  return (
    <>
      {addresses.length > 0 ? (
        addresses.map((address) => (
          <div key={address.id} className={styles.settingscard}>
            {address.isDefault && (
              <span className={styles.cardtitle}>Default</span>
            )}

            <div className={styles.cardinfo}>
              <div>
                <b>{address.name}</b>

                <div>
                  {address.flatHouseBuilding} <span>{address.city}</span>
                </div>

                <div>{address.city}</div>

                <div>
                  {address.city}, <span>{address.state}</span>{" "}
                  <span>{address.pincode}</span>
                </div>

                <div>{address.country}</div>

                <div>
                  Phone Number: <span>{address.mobileNumber}</span>
                </div>
              </div>

              <div className={styles.cardbuttons}>
                <button
                  onClick={() => {
                    setSelectedAddress(address);
                    setMode("Edit");
                  }}
                  className={styles.cardbutton}
                >
                  Edit
                </button>

                <span>|</span>

                <button
                  onClick={() => {
                    handleDeleteAddresses(address);
                  }}
                  className={styles.cardbutton}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span>No addresses found.</span>
      )}
          <button
              className={styles.cardaddaddresses}
              onClick={() => {
                setSelectedAddress(null);
                setMode("Add");
              }}
            >
              Add Address
            </button>
    </>
  )
}

export default ViewAddresses;