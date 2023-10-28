import { Keypair } from '@solana/web3.js';
import * as dotenv from 'dotenv';
import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';

// To send tokens, read and write data to the blockchain, you need a keypair.

// 1. Generate a new random keypair
const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());

// Key pair can be regenerated from secret key
// Secret key gives authority over the address
console.log(`The secret key is: `, keypair.secretKey);

// 2. Loading a keypair from a secret key
dotenv.config();
const keyPair = getKeypairFromEnvironment('PRIVATE_KEY');

console.log('The public key loaded from private key is ', keyPair.publicKey.toBase58());
