/**
 * Created by tudouhu on 2017/2/2.
 */
import React from 'react';
import Tools from '../common/Tools';
import style from './Login.css';

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
       <div>
         <div>
           <img src="assets/img/icon.png"/>
         </div>
         <div ref='formDiv' className={style.bk}>
           <h1>用户登录</h1>
           <div className={style.nameDiv}>
             名字<input type="text" ref='name'/>
           </div>
           <div className={style.passwordDiv}>
             密码<input type="text" ref='password'/>
           </div>
           <div>
             <button ref='tijiao' onClick={this.toggle} className={style.btn} >
               登录
             </button>
             <button ref='tijiao' onClick={this.toggle1} className={style.btn} >
               注册
             </button>
           </div>

         </div>
       </div>
      );
  }


  /**
   * 登录
   */
  toggle=()=>{

    if(this.refs.name.value==''||this.refs.password.value==''){
      alert('请输入完整的账号和密码');
      return;
    }

    let d={name:this.refs.name.value,password:this.refs.password.value,type:'登陆'};

    Tools.ajax({data:d,url:'http://60.205.222.103:8000',mothed:'get',async:true,timeout:10000,
      callback:(d)=>{

        //{"data":"0"}  //已存在
        //{"data":"1"}  // 注册成功
        //{'data':'err'} //数据库错误
        console.log(d);

        try{
          let str=JSON.parse(d).data;
          console.log(str);
          if(str=='0') alert('用户名或者密码错误');
          else if(str =='1') {
            alert('登陆成功');
            this.refs.formDiv.innerHTML = '欢迎你'+this.refs.name.value;
            this.refs.tijiao.style.display = 'none';
          }
        }
        catch(e){

        }
      }
    });

  }

  /**
   * 注册
   */
  toggle1=()=>{

    if(this.refs.name.value==''||this.refs.password.value==''){
      alert('请输入完整的账号和密码');
      return;
    }

    let d={name:this.refs.name.value,password:this.refs.password.value,type:'注册'};

    Tools.ajax({data:d,url:'http://60.205.222.103:8000',mothed:'get',async:true,timeout:10000,
      callback:(d)=>{

        //{"data":"0"}  //已存在
        //{"data":"1"}  // 注册成功
        //{'data':'err'} //数据库错误
        console.log(d);

        try{
          let str=JSON.parse(d).data;
          console.log(str);
          if(str=='0') alert('已注册');
          else if(str=='1'){
            alert('注册成功');
          }

        }
        catch(e){

        }
      }
    });

  }



}


export default Login;
