import React,{useState,useEffect,useRef} from 'react'
import { connect } from 'dva'
import './index.less'
import {
  TextField
} from 'formik-material-ui';
import {MenuItem,Modal} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Formik, Form, Field} from 'formik';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import router from 'umi/router';
console.log("Modal", Modal)

let newFlagInterval
const NewFlags = (props)=>{
  const {dispatch} = props
  const [showModel, setShowModel] = useState(false)
  const formikRef = React.createRef()

  const assetsInfo = [{
    asset_id:'f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c',
    symbol:'box'
  },{
    asset_id:'c6d0c728-2624-429b-8e0d-d9d19b6592fa',
    symbol:'btc'
  },{
    asset_id:'6cfe566e-4aad-470b-8c9a-2fd35b49c68d',
    symbol:'eos'
  },{
    asset_id:'c94ac88f-4671-3976-b60a-09064f1811e8',
    symbol:'xin'
  },{
    asset_id:'3edb734c-6d6f-32ff-ab03-4eb43640c758',
    symbol:'prs'
  }]

  const requireValidate = (value, name) =>{
    let error
    if(!value) {
      error=`请输入${name}`
    }
    return error
  }

  const requirenumberValidate = (value, name) =>{
    let error
    if(!value) {
      error=`请输入${name}`
    } else if(!/^\+?[1-9][0-9]*$/.test(value)) {
      error=`请输入正整数`
    }
    return error
  }

  const requirefloatnumberValidate = (value, name) =>{
    let error;
    if(!value) {
      error=`请输入${name}`
    } else if(!/^\d+(\.\d+)?$/.test(value)) {
      error='请输入数字'
    }
    return error
  }

  const handleMaskClose = () =>{
    console.log("handleMaskClose -> newFlagInterval", newFlagInterval)
    console.log('formikRef--->',formikRef)
    setShowModel(false)
    clearInterval(newFlagInterval)
  }

  return(
    <div>
      <Formik
        ref={formikRef}
        onSubmit={(values, {setSubmitting}) => {
           setShowModel(true)
           dispatch({
             type: 'flag/newFlag',
             payload: {...values,
              days_per_period:Number(values.days_per_period),
              max_witness:Number(values.max_witness),
              amount:Number(values.amount),
              total_period:Number(values.total_period),
              symbol:assetsInfo&&assetsInfo.filter(ele=>ele.asset_id==values.asset_id)[0].symbol}
            }).then(id=>{
              setSubmitting(false)
              newFlagInterval = setInterval(()=>{
                dispatch({
                  type: 'flag/payFlag',
                  payload:{
                    flag_id: id
                  }
                }).then(status=>{
                  console.log('status')
                    if(status=='PAID') {
                      router.push({pathname:'/addflagsuccess',query:{id}})
                      clearInterval(newFlagInterval)
                    }
                })
              },1500)
            })
          }}
        initialValues={{
          task:'',
          amount: 0,
          asset_id: 'f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c',
          max_witness:1,
          total_period:1,
          days_per_period: 1,
          // times_achieved:new Date()
        }}
        render={({submitForm, isSubmitting, values, setFieldValue}) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form className="newflags-container">
            <div className="newflags-title">新建立志</div>
            <Field
              component={TextField}
              type="text"
              label="任务名"
              name="task"
              className="newflags-item"
              validate={(value)=>requireValidate(value, '任务名')}
            />
            <Field
              component={TextField}
              type="text"
              label="总周期数"
              name="total_period"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '周期数')}
            />
            <Field
              component={TextField}
              type="text"
              label="每个周期天数"
              name="days_per_period"
              className="newflags-item"
              validate={(value)=>requirenumberValidate(value, '周期天数')}
            />
            <Field
              component={TextField}
              type="text"
              label="最多见证者人数"
              name="max_witness"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '最多见证者人数')}
            />
            <Field
              component={TextField}
              type="text"
              name="asset_id"
              label="选择币种"
              select
              variant="standard"
              helperText="请选择币种"
              margin="normal"
              className="newflags-item"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {assetsInfo&&assetsInfo.map((option,idx) => (
                <MenuItem key={idx} value={option.asset_id}>
                  {option.symbol}
                </MenuItem>
              ))}
            </Field>
            <Field
              component={TextField}
              type="text"
              label="金额"
              name="amount"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '金额')}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className="newflags-submit"
              >
              点击新建
            </Button>
            </Form>
          </MuiPickersUtilsProvider>
        )}
        />
        <Modal 
          open={showModel} 
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          <div className="newflags-modal">
            <div className="newflags-modal-text">正在检查支付结果</div>
            <Button className="newflags-modal-btn" variant="contained" color="primary" onClick={()=>handleMaskClose()}>取消</Button>
          </div>
        </Modal>
    </div>
  )
}


export default connect(({flag,assets})=>({flag,assets}))(NewFlags)
