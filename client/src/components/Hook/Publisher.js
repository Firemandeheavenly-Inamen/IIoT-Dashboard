import React, { useContext } from 'react';
import { Card, Form, Input, Row, Col, Button, Select } from 'antd';
import { QosOption } from './index'

const Publisher = ({ publish }) => {
  const [form] = Form.useForm();
  const qosOptions = useContext(QosOption);
  const [data, setData] = React.useState(null )//This code is for testing api from server)

  React.useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))
  },[]);

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const onFinish = (values) => {
    publish(values)
  };

  const PublishForm = (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Topic"
            name="topic"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="QoS"
            name="qos"
          >
            <Select options={qosOptions} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Payload"
            name="payload"
          >
            <Input.TextArea />
          </Form.Item>
          
        </Col>
<<<<<<< HEAD

        <Col span={8} offset={16} style={{ textAlign: 'right' }}>
=======
        <Col span={8} offset={5} style={{ textAlign: 'right' }}>
>>>>>>> 275cfae9441d035eff08747c9f598d22927efcee
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Publish
            </Button>
          </Form.Item>
        </Col>
      </Row>

      {/* ================================= */}
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Name"
            name="name"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Poem"
            name="poem"
          >
            <Input.TextArea />
          </Form.Item>
          
        </Col>
        
        <Col span={8} offset={16} style={{ textAlign: 'right' }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Test
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )

  return (
    <Card
      title="Publisher"
    >
      {PublishForm}
      {!data ? 'LOADING...': data}
    </Card>
  );
}

export default Publisher;
