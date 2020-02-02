import React from 'react';
import { Form, Input, Button} from 'antd';
import './CreateTask.css';
class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
    };
  }


  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const content = <h4 style={{color: "red", margin: 0}}>None Tags Added</h4>;
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item className="task" label="Task:" {...formItemLayout}>
            <Input placeholder="title" />
          </Form.Item>
          <Form.Item className="description" label="Descriptions:" {...formItemLayout}>
            <Input/>
          </Form.Item>
          <Form.Item className="Tags" label="My Tags" {...formItemLayout}>
            {content}
          </Form.Item>
          <Form.Item className="input" label="Add Tags" {...formItemLayout}>
            <Input/>
          </Form.Item>
          <nav className="button">
          <Button type="primary">Add One</Button>
          <Button type="danger">Clear All</Button>
          </nav>
        </Form>
      </div>
    );
  }
}

export default FormLayoutDemo;
