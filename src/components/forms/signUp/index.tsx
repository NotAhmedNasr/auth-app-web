import { Button, Form, Input, message } from 'antd';
import { useContext, useState } from 'react';
import { signUp } from '../../../lib/apis/auth.api';
import { AxiosError } from 'axios';
import { AuthContext } from '../../hoc/context/auth';

type FieldType = {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
};

const SignUpForm = () => {
  const { setAuthToken } = useContext(AuthContext) ?? {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const messageKey = 'toast';

  const onFinish = async (values: FieldType) => {
    setIsSubmitting(true);
    messageApi.open({
      key: messageKey,
      type: 'loading',
      content: 'Submitting...',
    });
    const { err, result } = await signUp({
      email: values.email ?? '',
      name: values.name ?? '',
      password: values.password ?? '',
    });
    setIsSubmitting(false);
    if (err) {
      let errMsg = 'Something went wrong!';
      if (
        err instanceof AxiosError &&
        err.response?.data.message === 'duplicate email'
      ) {
        errMsg = 'Email is already taken!';
      }
      // handle error
      messageApi.open({
        key: messageKey,
        type: 'error',
        content: errMsg,
      });
      return;
    }
    // handle success
    messageApi.open({
      key: messageKey,
      type: 'success',
      content: 'Sign up was successful!',
    });
    setAuthToken?.(result.token);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      disabled={isSubmitting}
    >
      {contextHolder}
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Email is required!',
          },
          {
            type: 'email',
            message: 'Email is invalid',
          },
        ]}
      >
        <Input placeholder="ex: email@example.com" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'Name is required!' },
          {
            pattern: /^[a-zA-Z]+(\s([a-zA-Z]+\s)*[a-zA-Z]+)?$/,
            message: 'Invalid Name!',
          },
        ]}
      >
        <Input placeholder="ex: John, John Doe" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Password is required!',
          },
          {
            min: 8,
            message: 'Password must be at least 8 characters',
          },
          {
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
            message:
              'Password must at least contain 1 letter, 1 number, 1 special character',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Confirm Password is required!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Confirm Password must match Password!'),
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
