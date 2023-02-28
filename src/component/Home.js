import axios from 'axios'
import { useState,useEffect } from 'react';
import { Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const Home = ()=>{
    
    const [data,setdata] = useState([{
        Book_Name:"",
        Type:"",
        Price:""
        
    }])
    const [datatemp,setdatatemp] = useState([{
        Book_Name:"",
        Type:"",
        Price:""
        
    }])
    const onSearch = (value) => {
        if(value===""){
            setdata(datatemp)
        }
        else{
            setdata(data.filter(obj=>{
                return obj.Book_Name==value
            }))
        }
    };
    useEffect( ()=>{
       
        gettabledata()
        // console.log(data)
    },[])
    const gettabledata = async()=>{
        const datas = await axios.get('http://localhost:4000/api/books')
        // console.log(datas.data)
        setdata(datas.data)
        setdatatemp(datas.data)
    } 
   
 
      
      const columns = [
        {
          title: 'Book Name',
          dataIndex: 'Book_Name',
          key: 'Book_Name',
        },
        {
          title: 'Type',
          dataIndex: 'Type',
          key: 'Type',
        },
        {
          title: 'Price',
          dataIndex: 'Price',
          key: 'Price',
        },
      ];
      
      
      return (
        <div>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
             <Table dataSource={data} columns={columns} />
            {/* <p>test</p> */}
        </div>
      )
}
export default Home