import * as React from "react";
import { Layout, Row, Col, Typography, Button } from "antd";

import "./Hero.scss";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const Hero = () => {
  return (
    <Layout className="hero__container">
      <Content>
        <Row justify="center" align="middle">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Title level={1}>
              <b>William A. Seese</b>
            </Title>
            <Paragraph>Passionate and ambitious developer creating amazing software and web experiences.</Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
