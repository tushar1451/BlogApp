import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full'>
            <div className='justify-center'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt="image" />
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
)
}

export default PostCard