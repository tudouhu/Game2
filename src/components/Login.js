/**
 * Created by tudouhu on 2017/2/2.
 */
import React from 'react';
import Tools from '../common/Tools';
/**
 * 登录组件 继承React.Component
 */
class Login extends React.Component{

  /**
   * 登录组件构造函数
   * @param props
   */
  constructor(props){
    super(props);
    this.state={type:'注册'};
  }

  /**
   * 渲染完成执行
   */
  componentDidMount(){
    //给姓名输入框添加输入事件
    this.refs.name.addEventListener("input",e=>{console.log(e.target.value)});
  }

  /**
   * 渲染
   */
  render(){
      return(
        <div ref='formDiv' style={{position:"relative",height:'100px'}}>
          <div>
            名字<input type="text" ref='name'/>
          </div>
          <div style={{position:"absolute",top:"20px"}}>
            密码<input type="text" ref='password'/>
          </div>
          <button ref='tijiao' onClick={this.toggle} style={{position:"absolute",top:"50px"}}>
            点击{this.state.type}
          </button>
        </div>
      );
  }


  /**
   * 提交
   */
  toggle=()=>{

    if(this.refs.name.value==''||this.refs.password.value==''){
      alert('请输入完整的账号和密码');
      return;
    }

    let d={name:this.refs.name.value,password:this.refs.password.value,type:this.state.type};

    Tools.ajax({data:d,url:'http://60.205.222.103:8000',mothed:'get',async:true,timeout:10000,
    callback:(d)=>{

      //{"data":"0"}  //已存在
      //{"data":"1"}  // 注册成功
      //{'data':'err'} //数据库错误
      console.log(d);

      try{
        let str=JSON.parse(d).data;
        if(this.state.type=='注册'){
          if(str=='0') alert('已注册');
          else if(str=='1'){
            alert('注册成功');
            this.setState({type:'登陆'});
          }
        }
        else{
          if(str=='0') alert('用户名或者密码错误');
          else if(str =='1') {
            alert('登陆成功');
            this.refs.formDiv.innerHTML = '欢迎你'+this.refs.name.value;
            this.refs.tijiao.style.display = 'none';
          }
        }

      }
      catch(e){

      }
    }
    });

  }



}


export default Login;
