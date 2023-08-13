import streamlit as st

st.title("Smart Contract Analyzer")

contract_code = st.text_area("Enter Smart Contract Code")

if st.button("Analyze"):
    if contract_code:
        st.text("""The DosAuction contract is vulnerable to a Denial-of-Service (DoS) attack due to the use of the send function to refund the frontrunner. An attacker can deploy a malicious contract as the frontrunner, causing the refund mechanism to fail and effectively locking out other participants. This makes the contract insecure.

The SecureAuction contract addresses the DoS vulnerability by using a "pull" architecture for refunds, which mitigates the issue. However, the withdraw function could still be susceptible to reentrancy attacks. It's generally recommended to include a reentrancy guard to further enhance security.

In summary, while the SecureAuction contract is more secure compared to DosAuction, best practices like using the latest Solidity version and employing reentrancy guards should be considered to ensure a higher level of security.""")
    else:
        st.warning("Please enter smart contract code.")