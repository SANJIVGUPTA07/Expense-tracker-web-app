import axios from 'axios'
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const[name,setName] = useState('')
    const[category,setCategory] = useState('')
    const[amount,setAmount] = useState('')
    const[paymentmode,setPaymentmode] = useState('')
    const[date,setDate] = useState('')
    
    const Navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://6427d97d161067a83b0209a5.mockapi.io/ExpenesData',{
            e_name:name,
            e_category:category,
            e_amount:amount,
            e_paymentmode:paymentmode,
            e_date:date
        }).then(()=>{
            Navigate('/view');
        })
    }

  return (
    <>
    <div className="row justify-content-center table table-striped w-auto">
        <div className="col-md-4">
            <div className="bg-dark p-4 text-center text-white rounded-top">
                <h1>Create Data</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='fw-bold'>Name:</label>
                <input type="text" placeholder='Name' required onChange={(e) => setName(e.target.value)} className='form-control'/>
            </div> 
            <div className="form-group">
                <label className='fw-bold'>Category:</label>
                <input type="text" placeholder='Category' required onChange={(e) => setCategory(e.target.value)} className='form-control '/>
            </div>
            <div className="form-group">
                <label className='fw-bold'>Amount:</label>
                <input type="number" placeholder='Amount' required onChange={(e) => setAmount(e.target.value)} className='form-control'/>
            </div>
            <div className="form-group">
                <label className='fw-bold'>Payment Mode:</label>
                <input type="text" placeholder='Payment Mode' required onChange={(e) => setPaymentmode(e.target.value)} className='form-control'/>
            </div>
            <div className="form-group">
                <label className='fw-bold'>Date:</label>
                <input type="date" placeholder='Date' required onChange={(e) => setDate(e.target.value)} className='form-control'/>
            </div>
            <br />
            <div className="d-grid">
                <input type="submit" value="Submit" required className='btn btn-dark'/>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Create;
