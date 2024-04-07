import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap';
import {loadAllCategories} from "../Services/Category-Service";
import JoditEditor from 'jodit-react';
import { createPost as doCreatePost } from '../Services/Post-Service';
import {getCurrentUserDetail} from  '../Auth/index';
import { toast } from 'react-toastify';

const AddPost=()=> {


  const editor=useRef(null);
  // const[content,setContent]=useState(''); 
  const[categories,setCategories]=useState([]);
  const[user,setUser]=useState(undefined);
  const[post,setPost]=useState({
    title:'',
    content:'',
    id:''
  });

  // const config={
  //   placeholder:"Start Typing..."
  // };


useEffect(()=>{


  setUser(getCurrentUserDetail());
 loadAllCategories().then((data)=>{

  setCategories(data)
 }).catch(error=>{
  // console.log(error)
 })
},[]);


//field changed function

const fieldChanged=(event)=>{

  // setPost({...post,title:event.target.value})
  setPost({...post,[event.target.name]:event.target.value})

};

const contentFieldChanged=(data)=>{
  setPost({...post,'content':data})


};

// create post function

const createPost=(event)=>{
  event.preventDefault();
  console.log("FOrm Submit"); 
  console.log(post);
  if(post.title.trim()===''){
    toast.error("Post Title is required");
    return;
  }
  if(post.content.trim()===''){
    toast.error("Post Content is required");
    return;
  }
  if(post.id.trim()===''){
    toast.error("Select a category is required");
    return;
  }


  // submit the form to the server
 post['userId']=user.id

  doCreatePost(post).then(data=>{
    toast.success("Post Created");
    setPost({
      title:'',
      content:'',
      id:''

    });
   
  }).catch((error)=>{
    toast.error("Post not created due to some error")
    
  });

};


  return (
    <div className="wrapper">
      
      <Card className="shadow-sm border-0 mt-3" >

        <CardBody>
          {/* {JSON.stringify(post)} */}

            <h3>What's going in your mind?</h3>
            <Form onSubmit={createPost}>

                <div className='my-3'>
                    <Label for='title'>Post Title</Label>
                    <Input
                     type='text' 
                     id='title'
                     placeholder='Enter Here'
                     className='rounded-0'
                     name='title'
                     onChange={fieldChanged}
                     value={post.title}
                     />
                </div>

                <div className='my-3'>
                    <Label for='content'>Post Content</Label>
                    {/* <Input
                     type='textarea' 
                     id='content'
                     placeholder='Enter Here'
                     className='rounded-0'
                     style={{height:"150px"}}
                     /> */}
                     <JoditEditor
                     ref={editor}
                    value={post.content}
                    //  config={config}
                    //  onChange={newContent=>setContent(newContent)}
                    onChange={contentFieldChanged}
                     />
                </div>
                <div className='my-3'>
                    <Label for='category'>Post Category</Label>
                    <Input
                     type='select' 
                     id='category'
                     placeholder='Enter Here'
                     className='rounded-0'
                     name='id'
                     onChange={fieldChanged}
                     defaultValue={0}
                     
                     >

                      <option disabled value={0} >---Select Category---</option>
                  {
                    categories.map((category)=>(
                      <option value={category.id} key={category.id}>
                        {category.categoryTitle}
                      </option>
                    ))
                  }
                   

                     </Input>
                </div>


                <Container className="text-center">
                  <Button type='submit' className='rounded-0' color='primary'>Create Post</Button>
                  <Button className='rounded-0 ms-2' color='danger'>Reset Content</Button>

                </Container>
            </Form>
        </CardBody>
      </Card>

    </div>
  )
}

export default AddPost;