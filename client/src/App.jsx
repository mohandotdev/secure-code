import './App.css'
import Topbar from './components/topbar'
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require("dotenv").config({ path: '././env' })

function App() {
  const [payload, setPayload] = useState();
  const [result, setResult] = useState([]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    const parsedText = JSON.stringify({ code: text });
    setPayload(parsedText);
  };

  const handleSubmit = async()=>{
    const id = toast.loading("Please wait..Analysing the code")
    setResult([]);
    const response = await axios.post(`${process.env.API_ENDPONT}`, payload, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.data.status == 200){
      setResult(response);
      toast.update(id, {
        render: "Code analysed successfully", 
        type: "success", 
        isLoading: false, 
        autoClose: 5000, 
        closeOnClick: true
      });
    }else if(response.data.status == 400){
      toast.update(id, {
        render: response.data.body.message, 
        type: "warning", 
        isLoading: false, 
        autoClose: 5000, 
        closeOnClick: true
      });
    }else if(response.data.status === 500){
      toast.update(id, {
        render: response.data.body.message, 
        type: "error", 
        isLoading: false, 
        autoClose: 10000, 
        closeOnClick: true
      });
    }
  }

  return (
    <div className="whole-content">
      <Topbar/>
      <div className="main-content">
        <div>
          <span className="nav-title">Dashboard</span>
        </div>
        <ToastContainer 
          position='top-center'
          theme="dark"
          style={{ marginTop: '60px' }}
        />
        <div className="panels">
          <div className="code-panel">
            <textarea maxLength="1024" onChange={handleInputChange} />
          </div>
          <div className='centerdiv'>
            <img alt='flow_icon' src='Flow.png'/>
          </div>
          <div className="result-panel">
          {result.data ? (
              <div>
                {Object.keys(result.data.body).map((key) => (
                  <p key={key}>
                    <b>{key}:</b> {result.data.body[key]}
                  </p>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="sub_btn">
            <button onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
