import React, {Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {actions as  authedActions } from '../redux/authed'
const FormItem = Form.Item
import logoGif from '../imgs/logo.png'


class Login extends Component{
    constructor(props){
        super(props)
        this.handleOk = this.handleOk.bind(this)
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleOk(){
        this.props.login()
    }
    handleSubmit =(e) =>{
        e.preventDefault()
        const validate = (err, values) => {
            if(err) return
            this.props.login({
                userName: values.userName,
                passWord: values.passWord,
            })
        }
        this.props.form.validateFields(validate);
    }
    render (){
        const {getFieldDecorator} = this.props.form
        const userNameProps = getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your userName!' }]
        })
        const passWordProps = getFieldDecorator('passWord', {
            rules: [{ required: true, message: 'Please input your Password!' }]
        })
        return(
            <div className='form'>
               <div className='logo'>
                    <img src={logoGif} />
                    <span></span>
               </div>
               <Form
                    className='login-form'
                    onSubmit={this.handleSubmit}
                >
                    <FormItem>
                        {userNameProps(
                            <Input placeholder='userName' size="large"  />
                        )}
                    </FormItem>
                    <FormItem >
                        {passWordProps(
                            <Input type='password' placeholder='Password'  size="large" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" size="large"  >
                            Sign in
                         </Button>
                         
                         <p>
                            <span>Username：admin</span>
                            <span>Password：123456</span>
                        </p>
                    </FormItem>
                </Form>
                <Button type="primary">
                    <Link to='/test2'>  go to test2</Link>
                </Button>
            </div>
        )
        
    }
}
const NormalLoginForm = Form.create()(Login)
const mapStateToProps = () => ({

})

export default connect(mapStateToProps, Object.assign({}, authedActions))(NormalLoginForm)