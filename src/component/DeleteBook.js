import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';

const DeleteBook = ()=>{
  const onFinish =  (values) => {
    console.log(localStorage.getItem("Token"))
  
    axios.post("http://localhost:4000/api/deletebooks",values,
      {headers:{"x-access-token":localStorage.getItem("Token")}})
      .then((res) => {
        if(res.status==200){
          console.log(res)
          alert("Delete book Successful ")
        }
  })
};
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
      axios.get('http://localhost:4000/api/books').then(res=>{
          console.log(res.data)
        })
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
                    label="Book Name"
                    name="Book_Name"
                    rules={[
                      {
            required: true,
            message: 'Please input your book name!',
          },
        ]}
      >
        <Input />
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
export default DeleteBook