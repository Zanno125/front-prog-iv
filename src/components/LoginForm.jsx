import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

function LoginForm() {

  return (
    <>
      
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Usuario"
      name="username"
      rules={[{ required: true, message: 'Usuario incorrecto' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contraseña"
      name="password"
      rules={[{ required: true, message: 'Contraseña incorrecta' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Recordarme</Checkbox>
    </Form.Item>

    <Form.Item>
      <p>¿No tienes cuenta? <Link to='/register'>Crear aquí</Link></p>
    </Form.Item>

    <Form.Item>
      <Link to='/recoverAccount'>¿Olvidaste tu contraseña?</Link>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Iniciar Sesión
      </Button>
    </Form.Item>
  </Form>

    </>
  )
}

export default LoginForm
