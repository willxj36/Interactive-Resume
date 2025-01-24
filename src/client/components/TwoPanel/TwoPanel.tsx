import { Row, Col, Typography, List } from "antd";
import React from "react";

import { TransparentColumnProps, TwoPanelProps } from "./TwoPanel.models";
import "./TwoPanel.scss";

const { Title } = Typography;

export const TwoPanel: React.FC<TwoPanelProps> = (props) => {
  const { title, bulletPoints, index } = props;
  const isEven: boolean = index % 2 === 0;

  return (
    <Row className="content-row">
      {!isEven && <TransparentColumn position="left" />}
      <Col
        className={`content-col__container${isEven ? "" : " content-col__container--text-end"}`}
        xs={24}
        sm={20}
        md={16}
        flex={1}
      >
        <Title level={2}>
          <em>{title}</em>
        </Title>
        <List dataSource={bulletPoints} renderItem={(item) => <List.Item>{item}</List.Item>} />
      </Col>
      {isEven && <TransparentColumn position="right" />}
    </Row>
  );
};

const TransparentColumn: React.FC<TransparentColumnProps> = (props) => {
  const { position } = props;

  return (
    <Col className="transparent-col__container" xs={0} sm={4} md={8}>
      <div className={`transparent-col__inner transparent-col__inner--${position}`} />
    </Col>
  );
};
