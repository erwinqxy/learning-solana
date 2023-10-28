/*
All modifications to on-chain data happen through transactions. 
Transactions are mostly a set of instructions that invoke Solana programs. 
Transactions are atomic, meaning they either succeed - if all the instructions have executed properly - or fail, 
as if the transaction hasn't been run at all.

Transaction instructions contain:
- an identifier of the program you intend to invoke
- an array of accounts that will be read from and/or written to
- data structured as a byte array that is specified to the program being invoked

- the first signer in the array of signer is responsible for paying the transaction fee

Reference: https://www.soldev.app/course/intro-to-writing-data
*/

// const transaction = new Transaction();

// const sendSolInstruction = SystemProgram.transfer({
//   fromPubkey: sender,
//   toPubkey: recipient,
//   lamports: LAMPORTS_PER_SOL * amount,
// });

// transaction.add(sendSolInstruction);

// async function callProgram(
//   connection: web3.Connection,
//   payer: web3.Keypair,
//   programId: web3.PublicKey,
//   programDataAccount: web3.PublicKey
// ) {
//   const instruction = new web3.TransactionInstruction({
//     keys: [
//       {
//         pubkey: programDataAccount,
//         isSigner: false,
//         isWritable: true,
//       },
//     ],
//     programId,
//   });

//   const transaction = new web3.Transaction().add(instruction);

//   const signature = await web3.sendAndConfirmTransaction(connection, transaction, [
//     payer,
//   ]);

//   console.log(`✅ Success! Transaction signature is: ${signature}`);
// }

import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, Transaction, TransactionInstruction, clusterApiUrl, sendAndConfirmTransaction } from '@solana/web3.js';
import * as dotenv from 'dotenv';
import base58 from 'bs58';
import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';

dotenv.config();

const PING_PROGRAM_ADDRESS = new PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa')
const PING_PROGRAM_DATA_ADDRESS =  new PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod')

const payer = getKeypairFromEnvironment('PRIVATE_KEY');
const connection = new Connection(clusterApiUrl('devnet'));

async function sendPingTransaction(connection: Connection, payer: Keypair) { 
    const transaction = new Transaction()
    const programId = new PublicKey(PING_PROGRAM_ADDRESS)
    const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS)

    const instruction = new TransactionInstruction({
        keys: [
            {
            pubkey: pingProgramDataId,
            isSigner: false,
            isWritable: true
            },
        ],
        programId
        })

        transaction.add(instruction)

    const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
    )

    console.log(`✅ Transaction completed! Signature is ${signature}`)
    console.log(`You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)
}

await connection.requestAirdrop(payer.publicKey, LAMPORTS_PER_SOL*1)
await sendPingTransaction(connection, payer)