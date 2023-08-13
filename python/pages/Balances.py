import streamlit as st
#from web3 import Web3, EthereumTesterProvider

st.title("Ethereum Balance Checker")

# Input area for Ethereum address
eth_address = st.text_input("Enter Ethereum Address")

# Check balance button
if st.button("Check Balance"):
    if eth_address:
        eth_balance = 0.00334923
        st.success(f"The balance of {eth_address} is {eth_balance:.6f} ETH")
    else:
        st.warning("Please enter an Ethereum address.")
