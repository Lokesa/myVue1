<template>
  <div class="main">
    <div class="top">
      <Button type="primary" @click="refresh()">重玩</Button>
      <Button type="primary" @click="tongbu()">同步分数</Button>
      <span style="font-size: 20px;margin-left: 10px;color: red">分数:{{conunta}}</span>
    </div>

    <div class="jiu">
      <div class="grid-cell" id="grid-cell-0-0">
        <div class="cell" v-if="a00">{{a00}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-0-1">
        <div class="cell" v-if="a01">{{a01}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-0-2">
        <div class="cell" v-if="a02">{{a02}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-0-3">
        <div class="cell" v-if="a03">{{a03}}</div>
      </div>

      <div class="grid-cell" id="grid-cell-1-0">
        <div class="cell" v-if="a10">{{a10}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-1-1">
        <div class="cell" v-if="a11">{{a11}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-1-2">
        <div class="cell" v-if="a12">{{a12}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-1-3">
        <div class="cell" v-if="a13">{{a13}}</div>
      </div>

      <div class="grid-cell" id="grid-cell-2-0">
        <div class="cell" v-if="a20">{{a20}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-2-1">
        <div class="cell" v-if="a21">{{a21}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-2-2">
        <div class="cell" v-if="a22">{{a22}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-2-3">
        <div class="cell" v-if="a23">{{a23}}</div>
      </div>

      <div class="grid-cell" id="grid-cell-3-0">
        <div class="cell" v-if="a30">{{a30}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-3-1">
        <div class="cell" v-if="a31">{{a31}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-3-2">
        <div class="cell" v-if="a32">{{a32}}</div>
      </div>
      <div class="grid-cell" id="grid-cell-3-3">
        <div class="cell" v-if="a33">{{a33}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import Qs from 'qs'
    export default {
        name: 'o2048',
        data() {
            return {
                arryList: [2,4,8,16,32,64,128,256,512,1024,2048],
                timeInterval: true,
                a00: "",a01: "",a02: "",a03: "",a10: "",a11: "",a12: "",a13: "",a20: "",a21: "",a22: "",
                a23: "",a30: "",a31: "",a32: "",a33: ""
            }
        },
        computed: {
            conunta: function() {//记录总分数

                var aa=(this.a00==""? 0:parseInt(this.a00))+(this.a01==""? 0:parseInt(this.a01))+(this.a02==""? 0:parseInt(this.a02))+(this.a03==""? 0:parseInt(this.a03))+
                    (this.a10==""? 0:parseInt(this.a10))+(this.a11==""? 0:parseInt(this.a11))+(this.a12==""? 0:parseInt(this.a12))+(this.a13==""? 0:parseInt(this.a13))+
                    (this.a20==""? 0:parseInt(this.a20))+(this.a21==""? 0:parseInt(this.a21))+(this.a22==""? 0:parseInt(this.a22))+(this.a23==""? 0:parseInt(this.a23))+
                    (this.a30==""? 0:parseInt(this.a30))+(this.a31==""? 0:parseInt(this.a31))+(this.a32==""? 0:parseInt(this.a32))+(this.a33==""? 0:parseInt(this.a33))
                ;
                return aa;
            }
        },
        methods: {
            generate() {//随机生成一个2或4的格子
                let c3=(Math.random()*3).toFixed(0);
                let c4=(Math.random()*3).toFixed(0);
                let random=Math.random().toFixed(1);
                // let b=this.isEnd();
                if(this["a"+c3+c4]) {
                    this.generate();
                } else {
                    this["a"+c3+c4]=this.arryList[random>0.6? 1:0];
                }
            },
            isEnd() {//判断是否存在空的格子
                let b=false;
                for(let i=0;i<4;i++) {
                    for(let j=0;j<4;j++) {
                        if(this["a"+i+j]=="") {
                            b=true;
                        }
                    }
                }
                return b;
            },
            refresh() {//刷新重玩
                for(let i=0;i<4;i++) {
                    for(let j=0;j<4;j++) {
                        this["a"+i+j]="";
                    }
                }
                let c1=(Math.random()*3).toFixed(0);
                let c2=(Math.random()*3).toFixed(0);
                let random=Math.random().toFixed(1);
                this["a"+c1+c2]=this.arryList[random>0.6? 1:0];
                this.generate();
            },
            tongbu () {
                //同步分数
                /*this.axios({
                    method: 'post',
                    url: 'http://localhost:8081/insert', //后端api
                    data: {
                        fen: this.conunta,  //传给后端的数据
                    }
                }).then(function (res) {
                    console.log(res);
                    alert(response.data);
                }).catch(function (error) {
                    console.log(error)
                    alert(error);
                });*/
                var data = Qs.stringify({"matterIds":"1,2,3"});
                this.$ajax({
                    method: "post",
                        url: this.main_path+"insert.do",
                        data: "&fen=" +this.conunta
                })  .then( (res)=>{
                    //this.list = res.data;
                    alert(res.data)
                }).catch( (err)=>{
                    console.log(err)
                })

            },
            time() {//做限制 防止快速连击
                this.timeInterval=false;
                let logintimeOut=setInterval(() => {
                    this.timeInterval=true;
                    clearInterval(logintimeOut);
                },1000*0.2);
            },
            reghtUp() {//点击右键事件
                let b=false;
                if(this.isEnd()) {
                    for(let i=0;i<4;i++) {
                        for(let j=2;j>-1;j--) {
                            for(let k=3;k>j;k--) {//k为落子点坐标
                                if(this["a"+i+j]) {//如果要跳转的格子为空 那就跳过
                                    if(this["a"+i+k]==""&&this.noBlockHorizontal(i,j,k)) {//如果落子点为空的格子并且中间没障碍物则可落子
                                        this.time();
                                        b=true;
                                        this["a"+i+k]=this["a"+i+j];//格子赋值
                                        this["a"+i+j]="";
                                    } else if(this["a"+i+k]==this["a"+i+j]&&this.noBlockHorizontal(i,j,k)) {
                                        this.time();
                                        b=true;
                                        let a=parseInt(this["a"+i+k])+parseInt(this["a"+i+j]);
                                        this["a"+i+k]=a;
                                        this["a"+i+j]="";
                                    }
                                }
                            }
                        }

                    }
                } else {
                    this.$Message.warning("游戏结束您的分数是："+this.conunta);
                }
            },
            bottomUp() {
                let b=false;
                if(this.isEnd()) {
                    for(let i=0;i<4;i++) {//i为x轴j为y轴
                        for(let j=2;j>-1;j--) {//从第二排开始
                            for(let k=3;k>j;k--) {
                                if(this["a"+j+i]) {
                                    if(this["a"+k+i]==""&&this.toBlockHorizontal(i,j,k)) {//判断
                                        this.time();
                                        b=true;
                                        this["a"+k+i]=this["a"+j+i];
                                        this["a"+j+i]="";
                                    } else if(this["a"+k+i]==this["a"+j+i]&&this.toBlockHorizontal(i,j,k)) {
                                        this.time();
                                        b=true;
                                        let a=parseInt(this["a"+k+i])+parseInt(this["a"+j+i]);
                                        this["a"+k+i]=a;
                                        this["a"+j+i]="";
                                    }
                                }
                            }
                        }
                    }
                } else {
                    this.$Message.warning("游戏结束您的分数是："+this.conunta);
                }
                return b;
            },
            topUp() {
                let b=false;
                if(this.isEnd()) {
                    for(let i=0;i<4;i++) {//i为x轴j为y轴
                        for(let j=1;j<4;j++) {//从第二排开始
                            for(let k=0;k<j;k++) {
                                if(this["a"+j+i]) {
                                    if(this["a"+k+i]==""&&this.toBlockHorizontal(i,k,j)) {//判断
                                        this.time();
                                        b=true;
                                        this["a"+k+i]=this["a"+j+i];
                                        this["a"+j+i]="";
                                    } else if(this["a"+k+i]==this["a"+j+i]&&this.toBlockHorizontal(i,k,j)) {
                                        this.time();
                                        b=true;
                                        let a=parseInt(this["a"+k+i])+parseInt(this["a"+j+i]);
                                        this["a"+k+i]=a;
                                        this["a"+j+i]="";
                                    }
                                }
                            }
                        }
                    }
                } else {
                    this.$Message.warning("游戏结束您的分数是："+this.conunta);
                }
                return b;
            },
            leftUp() {
                let b=false;
                if(this.isEnd()) {
                    for(let i=0;i<4;i++) {
                        for(let j=1;j<4;j++) {
                            for(let k=0;k<j;k++) {
                                if(this["a"+i+j]) {
                                    if(this["a"+i+k]==""&&this.noBlockHorizontal(i,k,j)) {//判断
                                        this.time();
                                        b=true;
                                        this["a"+i+k]=this["a"+i+j];
                                        this["a"+i+j]="";
                                    } else if(this["a"+i+k]==this["a"+i+j]&&this.noBlockHorizontal(i,k,j)) {
                                        this.time();
                                        b=true;
                                        let a=parseInt(this["a"+i+k])+parseInt(this["a"+i+j]);
                                        this["a"+i+k]=a;
                                        this["a"+i+j]="";
                                    }
                                }
                            }
                        }

                    }
                } else {
                    this.$Message.warning("游戏结束您的分数是："+this.conunta);
                }
                return b;
            },
            monitor(_this) {
                window.onkeydown=function(e) {//监听键盘事件
                    console.log(e.keyCode);
                    if(_this.timeInterval) {
                        switch(e.keyCode) {
                            case 37:
                                if(_this.leftUp()) {//移动之后新生成一个格子
                                    _this.generate();
                                }
                                break;
                            case 38:
                                if(_this.topUp()) {
                                    _this.generate();
                                }
                                break;
                            case 39:
                                if(_this.reghtUp()) {
                                    _this.generate();
                                }
                                break;
                            case 40:
                                if(_this.bottomUp()) {
                                    _this.generate();
                                }
                                break;

                        }
                    }

                }
            },

            noBlockHorizontal(row,col1,col2) {//判断x轴中间是否有障碍物
                for(var i=col1+1;i<col2;i++)
                    if(this["a"+row+i])
                        return false;
                return true;
            },
            toBlockHorizontal(row,col1,col2) {//判断y轴中间是否有障碍物
                for(var i=col1+1;i<col2;i++)
                    if(this["a"+i+row])
                        return false;
                return true;
            }
        },
        mounted() {//初始化随机生成两个格子
            let c1=(Math.random()*3).toFixed(0);
            let c2=(Math.random()*3).toFixed(0);
            let random=Math.random().toFixed(1);;
            this["a"+c1+c2]=this.arryList[random>0.6? 1:0];
            this.generate();
            this.monitor(this);

        }
    }
</script>

<style scoped>
  .main {
    background: white;
    margin-top: 0px;
  }
  .top {
    margin: 0px;
  }
  .jiu {
    background: #ecdede;
    width: 500px;
    height: 500px;
    margin: auto;
    /* top: 100px; */

    padding: 10px;
  }
  .grid-cell {
    width: 100px;
    height: 100px;
    margin: 10px;
    background: #c3bcae;
    float: left;
    border-radius: 15%;
  }
  .cell {
    line-height: 100px;
    background: coral;
    border-radius: 15%;
    font-size: 50px;
    color: white;
    font-weight: bold;
  }
</style>
