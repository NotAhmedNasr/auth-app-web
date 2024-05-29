import { Button, Form, Input, message } from 'antd';
import { useContext, useState } from 'react';
import { signIn } from '../../../lib/apis/auth.api';
import { AxiosError } from 'axios';
import { AuthContext } from '../../hoc/context/auth';

type FieldType = {
  email?: string;
  password?: string;
};

const SignInForm = () => {
  const { setAuthToken } = useContext(AuthContext) ?? {};
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const messageKey = 'toast';

  const onFinish = async (values: FieldType) => {
    setIsSubmitting(true);
    messageApi.open({
      key: messageKey,
      type: 'loading',
      content: 'Signing in...',
    });
    const { err, result } = await signIn({
      email: values.email ?? '',
      password: values.password ?? '',
    });
    setIsSubmitting(false);
    if (err) {
      let errMsg = 'Something went wrong!';
      if (err instanceof AxiosError && err.response?.status === 401) {
        errMsg = 'Invalid Email or Password!';
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
      content: 'Sign in was successful!',
    });
    setAuthToken?.(result.token);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{
        span: 18,
      }}
      className="flex flex-col gap-5"
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
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Password is required!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          type="primary"
          block
          style={{
            backgroundColor: '#0C4A6E',
            fontWeight: 'bold',
            display: 'block',
            marginTop: '10px',
          }}
          size="large"
          htmlType="submit"
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
