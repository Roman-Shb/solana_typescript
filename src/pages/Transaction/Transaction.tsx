import React, { useEffect, useState, ReactNode, FC } from 'react';
import * as web3 from '@solana/web3.js';
import {
  StyledTitle,
  StyledPage,
  StyledSignature,
  StyledBlock,
  StyledBoldText,
  StyledText,
} from './styles';

interface ITransactionProps {
  signature: string;
}

interface IMessage {
  recentBlockhash: string;
}

interface ITransaction {
  message: IMessage;
}

interface IMeta {
  preBalances: number[];
  postBalances: number[];
  status: any;
}

interface ITransactionInfo {
  meta?: IMeta;
  transaction?: ITransaction;
}

const Transaction: FC<ITransactionProps> = ({ signature }) => {
  const getBalanceChange = (preBalance?: number, postBalance?: number) => {
    if (postBalance && preBalance) {
      return postBalance - preBalance;
    }
  };
  const [transactionInfo, setTransactionInfo] = useState<ITransactionInfo>({});
  const connection = new web3.Connection('https://api.rpcpool.com/');
  useEffect(() => {
    async function getTransactionInfo() {
      let info: any = await connection.getTransaction(signature);
      setTransactionInfo(info);
    }
    getTransactionInfo();
  }, [signature]);

  const renderStatus = (): string => {
    if (Object.keys(transactionInfo).length) {
      return Object.keys(transactionInfo?.meta?.status).includes('Ok') ? 'УСПЕШНО' : 'НЕУДАЧА';
    } else {
      return 'НЕИЗВЕСТНО';
    }
  };

  return (
    <StyledPage>
      <StyledTitle>
        Расширенная информация о транзакции
        <StyledSignature>{signature}</StyledSignature>
      </StyledTitle>
      {Object.keys(transactionInfo).length && (
        <StyledBlock>
          <p>
            <StyledBoldText>HASH:</StyledBoldText>
            <StyledText>{transactionInfo?.transaction?.message.recentBlockhash}</StyledText>
          </p>
          <p>
            <StyledBoldText>СТАТУС:</StyledBoldText>
            <StyledText>{renderStatus()}</StyledText>
          </p>
          <p>
            <StyledBoldText>БАЛАНС ДО:</StyledBoldText>
            <StyledText>{transactionInfo?.meta?.preBalances[0]}</StyledText>
          </p>
          <p>
            <StyledBoldText>БАЛАНС ПОСЛЕ:</StyledBoldText>
            <StyledText>{transactionInfo?.meta?.postBalances[0]}</StyledText>
          </p>
          <p>
            <StyledBoldText>ИЗМЕНЕНИЕ БАЛАНСА:</StyledBoldText>
            <StyledText>
              {getBalanceChange(
                transactionInfo?.meta?.preBalances[0],
                transactionInfo?.meta?.postBalances[0]
              )}
            </StyledText>
          </p>
        </StyledBlock>
      )}
    </StyledPage>
  );
};

export default Transaction;
