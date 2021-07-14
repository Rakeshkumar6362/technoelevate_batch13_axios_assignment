import axios from 'axios'
import React, { Component } from 'react'

export default class TestDrive extends Component {
    state={
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        pincode:""
        
    }
    handlechange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handlesubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        const acc= {...this.state}
        const url = `https://crud-operations-12cf9-default-rtdb.firebaseio.com/data.json`
        axios.post(url, acc ).then((resp)=>{
            if(resp.status===200){
                this.props.history.push("/show")
                this.setState({
                    firstname:"",
                    lastname:"",
                    email:"",
                    phone:"",
                    address:"",
                    city:"",
                    pincode:""
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    render() {
        return (
            <div className="TestDrive-div">
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
            
            <button type="submit" className="btn btn-warning d-block m-auto">Book Now</button>
            </form>



            </div>
        )
    }
}
