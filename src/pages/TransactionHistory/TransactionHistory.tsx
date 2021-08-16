//import  React from 'react';
import React, { useState, useEffect, FC } from 'react';
import * as web3 from '@solana/web3.js';
import { StyledTitle, StyledHistoryList, StyledPage } from './styles';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

const TransactionHistory: FC = () => {
  const [transactions, setTransactions] = useState<web3.ConfirmedSignatureInfo[]>([]);
  const account: string = '8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT';
  const connection: web3.Connection = new web3.Connection('https://api.rpcpool.com/');

  const pbk: web3.PublicKey = new web3.PublicKey(account);
  useEffect(() => {
    async function getTransactions() {
      let transactionsList: web3.ConfirmedSignatureInfo[] =
        await connection.getConfirmedSignaturesForAddress2(pbk);
      setTransactions(transactionsList);
    }
    getTransactions();
  }, []);

  if (transactions[0]) {
    console.log(transactions[0]);
  }

  return (
    <React.Fragment>
      <StyledPage>
        <StyledTitle>История транзакций</StyledTitle>
        <StyledHistoryList>
          {transactions.map((transaction: web3.ConfirmedSignatureInfo, idx) => (
            <TransactionCard transaction={transaction} key={idx} />
          ))}
        </StyledHistoryList>
      </StyledPage>
    </React.Fragment>
  );
};

export default TransactionHistory;
