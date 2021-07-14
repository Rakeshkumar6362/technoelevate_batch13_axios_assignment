import axios from 'axios'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class Account extends Component {
    state={
        account:[],
        show:false,
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        pincode:"",
        id:"",
        
        
    }
    componentDidMount() {        
        const url = `https://crud-operations-12cf9-default-rtdb.firebaseio.com/data.json`
        axios.get(url).then(res=>{
                const fetchdata=[];
                for (const key in res.data) {
                    fetchdata.push({
                        id:key,
                        ...res.data[key]
                    })
                }
                if(res.status===200){
                    this.setState({
                        account:fetchdata
                    })
                    console.log(this.state.account);
                }

        }).catch(err=>{
            console.log(err);
        })


        
    }
    deletedata=data=>{
        console.log(data);
        const url = `https://crud-operations-12cf9-default-rtdb.firebaseio.com/data/${data.id}.json`
        axios.delete(url).then((res)=>{
            const deleteddata = this.state.account.filter((acc)=>{
                if(acc.id === data.id){
                    return false;
                }
                else{
                    return true;
                }
            })
            console.log(deleteddata);
            this.setState({
                account:deleteddata
            })
        }).catch(err=>{
            console.log(err);
        })
        

        axios.delete()
        
    }
    handleClose  = ()=>{
        this.setState({
            show:false
        })
    }
    
    handlechange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    updateRecord= (acc)=>{
      const {firstname, lastname,email,phone,address,city,pincode,id}=acc
      this.setState({
        
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        address:address,
        city:city,
        pincode:pincode,
        id:id
        
      })
    }
    updateAccount = () => {
        
        const url = `https://crud-operations-12cf9-default-rtdb.firebaseio.com/data/${this.state.id}.json`   
      const {firstname, lastname,email,phone,address,city,pincode}= this.state;
        const account = { firstname, lastname, email, phone, address,city,pincode };
        
    
        axios.put(url, account)
          .then((resp) => {
            console.log(resp.status);
            const updated = this.state.account.map((acc)=>{
                return acc.id !== this.state.id?acc:account
            }

            )
            this.setState({
                account:updated,
                show:false,
                firstname:"",
                lastname:"",
                email:"",
                phone:"",
                address:"",
                city:"",
                pincode:"",
                id:"",
            })
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    render() {
        return (
            <div>
                <h4 className="text-uppercase text-center text-info">account</h4>
                <table class="table container">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">City</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>

    </tr>
  </thead>
  <tbody>
      {
            this.state.account.map((data, index)=>{
                return(
                    <>
                    <tr>
                        <td key={index}>{index+1}</td>
                        <td key={data.firstname}>{data.firstname} &nbsp;{data.lastname}</td>
                        <td key={data.email}>{data.email}</td>
                        <td key={data.phone}>{data.phone}</td>
                        <td key={data.city}>{data.city}</td>
                        <td><button className="btn btn-danger" onClick={()=>{this.deletedata(data)}}>Delete</button></td>
                                <td><button className="btn btn-success" onClick={()=>{
                                    this.updateRecord(data)
                                    this.setState({
                                        show:true
                                    })
                                }}>Update</button></td>

                    </tr>
                    </>
                )
            })

      }
  </tbody>
</table>
<Modal show = {this.state.show} animation={false} onHide={this.handleClose}
>
  <Modal.Header closeButton>
    <Modal.Title>Update Record</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <div>
                  <form className="container hadow p-3 mb-5 " onSubmit={this.handlesubmit}>
                <div className="form-row ">
                <div className="form-group col-md-6">
                <label htmlFor="user" className="text-info font-weight-bolder">Firstname</label>
                <input type="text" className="form-control" id="inputuser4" name="firstname" value={this.state.firstname} onChange={this.handlechange}  />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="lastuser" className="text-info font-weight-bolder">Lastname</label>
                <input type="text" className="form-control" id="inputuser4" name="lastname" value={this.state.lastname} onChange={this.handlechange} />
                </div>
                
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="inputEmail4" className="text-info font-weight-bolder">Email</label>
                <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handlechange}/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="phn" className="text-info font-weight-bolder">Phone no</label>
                <input type="text" className="form-control" id="phn" name="phone" value={this.state.phone} onChange={this.handlechange}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress"  className="text-info font-weight-bolder">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="start typing..." name="address" value={this.state.address} onChange={this.handlechange} />
            </div>
            
            <div className="form-row">
                
                <div className="form-group col-md-4">
                <label htmlFor="inputState" className="text-info font-weight-bolder">city</label>
                <select id="inputState" className="form-control" name="city"  value={this.state.city} onChange={this.handlechange}>
                    <option selected>Choose...</option>
                    <option value="Bengaluru" >Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label htmlFor="inputpincode" className="text-info font-weight-bolder">pincode</label>
                <input type="text" className="form-control" id="inputpincode" name="pincode" value={this.state.pincode} onChange={this.handlechange}/>
                </div>
            </div>
            
            </form>
            </div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
    <Button variant="primary" onClick={this.updateAccount}>Save changes</Button>
  </Modal.Footer>
</Modal>
            </div>
        )
    }
}
