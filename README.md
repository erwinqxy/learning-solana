# learning-solana

## Summary

### Why Web3

* Accounts that store value - like payment cards, bank accounts, and trading accounts - are handled by large platforms like credit card companies, money transfer organizations, and stock exchanges. In many cases these companies take a piece (around 1% - 3%) of every transaction that occurs on their platforms. They may often slow transaction settlement down, in order to benefit the organization. In some cases the item being transferred may not belong to the recipient at all, but are rather held on the recipient's behalf.
* Use case: Instant global payments, without the time and expense of 'money transfer' companies.

### What is Solana?

Solana is the first scalable Layer 1 blockchain.
Compared to older platforms like Bitcoin and Ethereum, Solana is:

* Significantly faster - most transactions complete in a second or two.
* Massively cheaper - transaction fees (referred to as 'gas fees' in older networks) are typically $0.000025 (yes, far less than one penny) regardless of the value of what's being transferred.
* Highly decentralized, having one of the highest Nakamoto coefficient (decentralization score) of any proof-of-stake network.

#### Cryptography and the Solana Network

* Symmetric Cryptography is where the same key is used to encrypt and decrypt (Eg. AES and Chacha20)
* Asymmetric Cryptography (public key cryptography)
  * Encryption: if it's encrypted with a public key, only the secret key from the same keypair can be used to read it
  * Signatures: if it's encrypted with a secret key, the public key from the same keypair can be used to prove the holder of the secret key signed it.

### Read from the Solana Network

* SOL is made from 1 billion Lampposts
* Accounts store tokens, NFTs, programs, and data
* All data stored on Solana is stored in accounts
* Addresses point to accounts on the Solana network

### Write Data to the Solana Network

* all modifications to on-chain data happen through transactions
* transactions are atomic, meaning success or fail
* transaction instructions contain:
  * an identifier of the program you intend to invoke
  * an array of accounts that will be read from and/or written to
  * data structured as a byte array that is specified to the program being invoke

### Interact with wallets

* Wallets store your secret key and handle secure transaction signing
* Hardware wallets store your secret key on a separate device
* Software wallets use your computer for secure storage
* Software wallets are often browser extensions that facilitate connecting to websites
* Solana’s Wallet-Adapter library simplifies the support of wallet browser extensions, allowing you to build websites that can request a user’s wallet address and propose transactions for them to sign
