import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap'
import PostPage from '../pages/PostPage';

function Post({post={title:"This is Default Post title",content:"This is default content"}}) {
  return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,40)+"..."}}>
              {/* {post.content.substring(0,40)}... */}

            </CardText>
            <div>
             {/* <Button>Read More</Button> */}
             <Link className='btn btn-secondary' to={'/post/'+post.postId}>Read More</Link>

            </div>
        </CardBody>
    </Card>
  )
};

export default Post;