import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'

const New = ({inputs, title}) => {
  //if file is added, then the value of this state will be an object that contains the details of the file
  const [file, setFile] = useState('')

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1> 
        </div>

        <div className='bottom'>
          <div className='left'>
            {/* we are creating a url of our local file */}
            <img src={file ? URL.createObjectURL(file):'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='} alt='' />
          </div>
          <div className='right'>
            <form>
               <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='icon'/></label>
                {/* Out of different images that user might put, we are taking the first image, i.e., 0th index */}
                <input onChange={e=>setFile(e.target.files[0])} type='file' id='file' style={{display:"none"}}/>
              </div>

              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default New
