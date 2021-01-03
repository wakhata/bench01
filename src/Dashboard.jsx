import { React } from "react";
import { Card, Statistic, Row, Col, Divider, Input } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Dashboard() {
  return (
    <div className='site-card-border-less-wrapper'>
      <div className='site-statistic-demo-card'>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title='Expected'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title='Processed'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title='Payments'
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title='Reconciled'
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
        </Row>
      </div>
      <Divider dashed />
      <Search placeholder='input search loading default' loading />
      <Divider dashed />
    </div>
  );
}
