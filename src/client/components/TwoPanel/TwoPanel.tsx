import { Row, Col, Typography } from "antd";
import React from "react";

import { TwoPanelProps } from "./TwoPanel.models";

const { Title, Paragraph } = Typography;

export const TwoPanel: React.FC<TwoPanelProps> = (props) => {
  const { title, text, index } = props;
  const isEven: boolean = index % 2 === 0;
  const backgroundColor = "#F8FFFFD0";

  return (
    <Row style={{ margin: "16px 0px" }} gutter={16}>
      {!isEven && <TransparentColumn />}
      <Col
        style={{ height: 300, padding: 20, backgroundColor, boxShadow: `0px 0px 2px 2px ${backgroundColor}` }}
        xs={24}
        sm={20}
        md={16}
        flex={1}
      >
        <Title level={2}>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </Col>
      {isEven && <TransparentColumn />}
    </Row>
  );
};

const TransparentColumn = () => <Col xs={0} sm={4} md={8} style={{ height: 300 }} />;
