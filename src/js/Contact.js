import React from "react";
import classes from "../css/contact.module.css"
import {init,send} from 'emailjs-com';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSubmitted: false,
            name: "",
            address: "",
            message:"",
            hasError:false,
            hasmessageError: false,
            hasaddressError: false,
            hasnameError: false,
        };
    }

    

    sendEmail = ()=>{
        init("user_ii4NVFpIlHovYvbD2cERJ");

        const template_param = {
            name: this.state.name,
            address: this.state.address,
            message: this.state.message
        };

        send("service_d7sedri","template_wxyoiys",template_param).then(() => {
            console.log("success to send email");
        })

        this.setState({name:""});
        this.setState({address:""});
        this.setState({message:""});
    }

    handleNameChange(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === "";
        this.setState(
            {
                name: inputValue,
                hasnameError: isEmpty
            })
    }

    handleAddressChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === "";
        this.setState(
            {
                address: inputValue,
                hasaddressError: isEmpty
            })
    }

    handleMessageChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === "";
        this.setState(
            {
                message: inputValue,
                hasmessageError: isEmpty
            })
    }

    handleSubmit(e){
        if(this.state.name==="" || this.state.address==="" || this.state.message===""){
            this.setState({hasError:true})
        }else{
            this.setState({isSubmitted:true})
            this.sendEmail();
        }
        return e.preventDefault();
    }

    render(){
        let contactForm;

        let nameErrorText = "???";
        if (this.state.hasnameError) {
            nameErrorText = "????????????????????????????????????"
        }

        let addressErrorText = "???";
        if (this.state.hasaddressError) {
            addressErrorText = "????????????????????????????????????????????????"
        }

        let messageErrorText = "???";
        if (this.state.hasmessageError){
            messageErrorText ="???????????????????????????????????????????????????"
        }

        let errorText = "???";
        if (this.state.hasError){
            errorText = "??????????????????????????????"
        }

        if(this.state.isSubmitted){
            contactForm = (
                <p>???????????????????????????????????????????????????????????????????????????</p>
            );
        }else{
            contactForm = (
                <div class={classes.contact}>
                    <p>???????????????????????????????????????????????????????????????</p>
                    <p>??????????????????????????????????????????????????????????????????????????????Twitter???DM??????????????????????????????</p>
                
                    <form onSubmit = {(e)=>{this.handleSubmit(e)}}>
                        <p>?????????????????????</p>
                        <input class={classes.name} placeholder="?????????????????????" value={this.state.name} onChange={(event)=>{this.handleNameChange(event)}} />
                        <p class={classes.text}>{nameErrorText}</p>
                        <p>?????????????????????????????????</p>
                        <input class={classes.address} placeholder="sample@gmail.com" value = {this.state.address} onChange={(event)=>{this.handleAddressChange(event)}}/>
                        <p class={classes.text}>{addressErrorText}</p>
                        <p>????????????????????????????????????</p>
                        <textarea class={classes.message} value = {this.state.message} onChange={(event)=>{this.handleMessageChange(event)}}/>
                        <p class={classes.text}>{messageErrorText}</p>
                        <input class={classes.button} type="submit" value="??????"/>
                        <p class={classes.text}>{errorText}</p>
                    </form>
                </div>
            );
        }

        return(
            <div class={classes.container}>
                {contactForm}
            </div>
        )
    }
}

export default Contact