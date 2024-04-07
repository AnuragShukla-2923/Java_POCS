import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap';
import Base from '../components/Base';
import { loadPost } from '../Services/Post-Service';
import { BASE_URl } from '../Services/helper';

const PostPage=()=> {

  //fetch postid
  const{postId}=useParams();
  const[post,setPost]=useState(null);

  useEffect(()=>{
  //load post by postid
  loadPost(postId).then(data=>{
    console.log(data);
    setPost(data);
  }).catch(error=>{
    console.log(error)
    toast.error("Error in  loading post")
  })

  },[]);

  const printDate=(numbers)=>{
// return new Date(numbers).toString();
return new Date(numbers).toLocaleString();
// return new Date(numbers).toLocaleDateString();
};

  return (
    <Base>
    <Container className='mt-4'>
      <Link to="/">Home</Link>
      <Row>
        <Col md={
          {
            size:12
          }}>
           <Card className='mt-3 ps-2'>
            {
              (post)&&(
              <CardBody>
              <CardText>
                Posted by <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
              </CardText>
      
             <CardText>
              <span className='text-muted'>{post.category.categoryTitle}</span>
             </CardText>


              <CardText className='mt-3'>
                <h3>{post.title}</h3>
              </CardText>
              <div className="image-container mt-3" style={{maxwidth:'50%'}}>
                <img className='img-fluid' src={BASE_URl+'/post/image/'+post.imageName} alt="" />
              </div>
              <CardText className='mt-5' dangerouslySetInnerHTML={{__html:post.content}}>

              </CardText>
            </CardBody>
              )
            }
           </Card>
        </Col>
      </Row>
    </Container>
    </Base>
  )
}

export default PostPage;