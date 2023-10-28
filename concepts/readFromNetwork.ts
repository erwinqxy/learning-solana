// Every interaction with the Solana network using @solana/web3.js is going to happen through a Connection object. 
// The Connection object establishes a connection with a specific Solana network, called a 'cluster'.

import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = new Connection(clusterApiUrl('devnet'));
const address = new PublicKey(getKeypairFromEnvironment('PRIVATE_KEY').publicKey); // own address
// const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await connection.getBalance(address);

// Since computers are better at handing whole numbers than fractions,
// we generally do most of our transactions in whole lamports, only converting back to SOL to display the value to users.
const balanceInSol = balance / LAMPORTS_PER_SOL; // need to do the conversion 

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);