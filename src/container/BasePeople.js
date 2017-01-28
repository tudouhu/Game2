/**
 * Created by tudouhu on 2017/1/28.
 */

import 'createjs';
import Timer from 'common/Timer';

/**
 * 人物基类
 */
class BasePeople extends createjs.Container{

  /**
   * 构造函数
   */
  constructor(){
    super();
    /**
     * x行走速度
     * @type {number}
     */
    this.walkSpeedX=2;
    /**
     * y行走速度
     * @type {number}
     */
    this.walkSpeedY=0.5;
    /**
     * x跑速度
     * @type {number}
     */
    this.runSpeedX=5;
    /**
     * y跑速度
     * @type {number}
     */
    this.runSpeedY=0.5;
    /**
     * 跳跃高度
     * @type {number}
     */
    this.jumpHeight = 30;
    /**
     *跑跳跃高度
     * @type {number}
     */
    this.runJumpHeight = 35;
    /**
     * 方向
     * @type {string}
     */
    this.arrow="right";

    this.currentAction = [];
    this.setSpriteData();


    this.walkP = false;
    this.runP = false;
    this.jumpP = false;
    this.attacking = false;


    Timer.add(this.animate,30,0);

  }

  /**
   *  影片剪辑数据
   */
  setSpriteData(){

  }






}


export default BasePeople;
