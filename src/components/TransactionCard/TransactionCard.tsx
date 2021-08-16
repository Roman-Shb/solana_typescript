import React, { FC } from 'react';
import { StyledLink, StyledTextAnt, StyledCard, StyledRow } from './styles';
import { Card, Typography, Space, Row, Col } from 'antd';
import { format } from 'date-fns';
import * as web3 from '@solana/web3.js';

interface IPropsTransaction {
  transaction: web3.ConfirmedSignatureInfo;
}

const TransactionCard: FC<IPropsTransaction> = ({ transaction }) => {
  const formateDate = (time?: number | null | undefined) => {
    if (time) {
      return format(new Date(time * 1000), 'dd/MM/yyyy HH:mm');
    }
  };
  return (
    <Row style={StyledRow}>
      <Col span={15}>
        <Card
          title={<StyledTextAnt>Информация о транзакции</StyledTextAnt>}
          extra={
            <StyledLink to={`/transaction/${transaction.signature}`}>
              <StyledTextAnt>Подробная информация</StyledTextAnt>
            </StyledLink>
          }
          style={StyledCard}
        >
          <Space direction='vertical'>
            <StyledTextAnt>ДАТА ТРАНЗАКЦИИ: {formateDate(transaction.blockTime)}</StyledTextAnt>
            <StyledTextAnt>СИГНАТУРА: {transaction.signature}</StyledTextAnt>
            <StyledTextAnt>СЛОТ: {transaction.slot}</StyledTextAnt>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default TransactionCard;
