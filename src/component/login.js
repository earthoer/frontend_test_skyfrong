import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login =()=>{
    const navigate = useNavigate();
    const onFinish =  (values) => {
        console.log("test1")
        
        console.log("test2")
        console.log('Success:', values);
        axios.post("http://localhost:4000/api/auth/signin",values).then((res) => {
            if(res.status==200){
                localStorage.setItem("Token",res.data.accessToken)
                localStorage.setItem("Role",res.data.roles)
                navigate("/")
                window.location.reload()
                alert("Login Successful ")
            }
            else{
                alert("UserName or Password Wrong ")
            }
      })
    };
    
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
 return (
    <div>
       <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
 )
}
export default Login