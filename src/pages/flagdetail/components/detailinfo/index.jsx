import React from 'react'
import { connect } from 'dva'
import './index.less'

const DetailInfo = (props)=>{
  return (
    <div>
      detailInfo
    </div>
  )
}

export default connect(({flag})=>({flag}))(DetailInfo)