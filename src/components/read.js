import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const[apiData,setApiData] = useState([])
    function getData(){
        axios.get('https://6427d97d161067a83b0209a5.mockapi.io/ExpenesData').then((respone) =>{
            setApiData(respone.data)
        })
    }
    useEffect(()=>{
        getData();
    },[]);
    
function handleDelete(id){
    axios.delete(`https://6427d97d161067a83b0209a5.mockapi.io/ExpenesData/${id}`).then(()=>{
        getData();
    })
}
  return (
    <>
        <div className="row">
            <div className="col-md-12">
                <div className="mb-2 mt-2">
                    <Link to='/create'>
                        <button className="btn btn-primary">
                            Create New Data
                        </button>
                    </Link>
                </div>
                <table className='table table-hover table-bordered table-striped table-dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map((items) =>{
                                return(
                                    <>
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.e_name}</td>
                                        <td>{items.e_category}</td>
                                        <td>{items.e_amount}</td>
                                        <td>{items.e_paymentmode}</td>
                                        <td>{items.e_date}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=> {if(window.confirm("Are you sure you want to delete??")){
                                                handleDelete(items.id)
                                            }}}>Delete</button>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Read;
