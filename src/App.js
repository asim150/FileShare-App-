import {useRef,useState,useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file,setFile]=useState('');
  const [result,setResult] = useState('');

  const fileInputRef = useRef();

  const logo = 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(()=>{
    const getImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        //Api call
        let response= await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick= () =>{
    fileInputRef.current.click();
  }

  console.log(file);

  return (
    <div className="container">
      <img src={logo} alt="banner"/>
      <div className='wrapper'>
        <h1>File Sharing App</h1>
        <p>Upload and share the download link.</p>

        <button onClick = {()=>onUploadClick()}>Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{display:'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
