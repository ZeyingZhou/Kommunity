import React from 'react';
import { Form, DatePicker, Button, InputNumber, Input } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
  
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
  
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
          ],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      };
      const rangeConfig = {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
      };
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Select Date">
            {getFieldDecorator('date-picker', config)(<DatePicker />)}
          </Form.Item>
            
        <Form.Item label="Number of PEOPLE">
          {getFieldDecorator('input-number', { initialValue: 1 })(<InputNumber min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item>
        <Form.Item className="task" label="Location:" {...formItemLayout}>
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);

  export default WrappedTimeRelatedForm;