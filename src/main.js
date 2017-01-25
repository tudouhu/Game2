/**
 * Created by tudouhu on 2017/1/21.
 */
import React from 'react';
import ReactDom from 'react-dom';
import '../vendors/createjs';
import Other from 'Other';
import Test from 'Test';
import Timer from 'common/Timer';
import Lib from 'res/Lib';

/**
 * 继承React.Component类 React组件类继承可以写成html写法
 */
class Main extends React.Component{


  /**
   * Main类构造函数
   * @param props
   */
  constructor(props){
    super(props);
  }


  /**
   * 页面卸载移除
   */
  componentWillUnMount(){
    alert("页面卸载移除");
  }


  /**
   * 渲染完成执行
   */
  componentDidMount(){

    //createjs创建矩形
    var testS=new createjs.Shape();
    testS.graphics.beginFill('#00ff00');
    testS.graphics.drawRect(0,0,100,50);
    testS.graphics.endFill();

    //new一个Other类实例对象
    var txt=new Other();
    txt.y = 70;

    //创建Flash打包的元件
    var flash=new Lib.Instance();
    flash.x = 200;
    flash.y = 30;


    // 创建一个舞台，参数为画布
    var stage=new createjs.Stage(this.refs.myCan);
    //createjs创建的舞台刷新才能显示，下面通过计时器设置为30毫秒刷新一次的帧频
    Timer.add(e=>{stage.update();},30,0);
    //添加到舞台显示，可以添加多个
    stage.addChild(testS,txt,flash);

  }


  /**
   * 渲染
   */
  render(){
    return(
      <div>
        <div ref='formDiv'>
          名字<input type="text" ref='name'/>
          密码<input type="text" ref='password'/>
        </div>
        <Test></Test>
        <h1>A左 D右 W跳 J攻击 K技能</h1>
        <div ref='ajaxDiv'>即将获取来自nodejs的数据</div>
        <canvas ref='myCan' width='1000px' height='300px'></canvas>
      </div>
    );
  }

}
//创建Main标签添加html中id=‘app'Div中
ReactDom.render(<Main></Main>,document.getElementById('app'));












