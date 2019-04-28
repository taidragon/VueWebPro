<template>
  <div id="body">
    <!--中部内容-->
    <div id="content">
      <!--标题图片-->
      <!--登录输入框背景框-->
      <div class="login-box" style="position: relative">
        <!--登录输入框-->
        <div class="login-box-left">
          <h3>用户登录</h3>
          <Form :model="loginData" :rules="loginRules"  label-position="top" ref="loginForm" @keyup.enter.native="handleSubmit">
            <FormItem prop="username" class="fromItems">
              <Input type="text" v-model="loginData.username" placeholder="请输入用户名"/>
            </FormItem>
            <FormItem prop="password" class="fromItems">
              <Input type="password" v-model="loginData.password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem  prop="codetest" class="verificationCode_box">
              <Input class="verificationCode_text" v-model="loginData.codetest" type="text" placeholder="请输入验证码"/>
              <div class="verificationCode">
                <Codetest ref="codetest" @getCodetest="getCodetest"></Codetest>
              </div>
            </FormItem>
            <!--<p>
              <Checkbox>记住密码</Checkbox>
            </p>-->
            <FormItem class="fromItems" style="margin-top: 20px">
              <Button size="large" long type="primary" @click="handleSubmit" ref="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Codetest from './Codetest'
export default {
  name: 'Login',
  data () {
    const validateCode = (rule, value, callback) => {
      if (value !== this.loginData.verificationCode) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      /*  登录框输入的数据  */
      loginData: {
        username: '',
        password: '',
        verificationCode: ''
      },
      /* 登录窗口验证的规则 */
      loginRules: {
        username: [{
          required: true, message: '请填写手机号/邮箱/用户名', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请填写密码', trigger: 'blur'
        }],
        codetest: [
          { required: true, message: '请填写验证码', trigger: 'blur' },
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Codetest
  },
  methods: {
    getCodetest (identifyCode) {
      this.loginData.verificationCode = identifyCode
    },
    /* 登录请求的方法 */
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$refs.codetest.refreshCode()
          if (this.loginData.username === 'admin' && this.loginData.password === '123456') {
            // 用户信息
            let msg = {
              name: 'admin',
              code: '110000'
            }
            // 将登陆用户信息保存到state
            this.$store.commit('setloginInfor', msg)
            // 将登陆用户信息保存到session里面
            sessionStorage.setItem('loginInfo', JSON.stringify(msg))
            // 跳转到首页
            this.$router.push({ name: 'testPage' })
          } else {
            this.$Message.info('账号或密码错误')
          }
        }
      })
    }
  },
  mounted () {
    /* 获取token */
    this.getToken()
  }
}
</script>

<style scoped  lang="scss" rel="stylesheet/scss" >
  /*撑起整个页面*/
#body{
  width:100%;
  height:100%;
  background: url("../../assets/loginBack.jpg") no-repeat center center;
  background-size: 100% 100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
  /*中部内容的样式*/
#content{
  width:20%;
  min-width: 500px;
  text-align: center;
  img{
    width:95%;
    display: inline-block;
  }
  /* 登录输入框的样式 */
  .login-box{
    width: 100%;
    height:300px;
    padding: 20px 80px;
    border-radius: 4px;
    margin-top:40px;
    background:rgba(255,255,255,0.8);
    border: 1px solid #ccc;
    background-size: 100% 100%;
    .login-box-left{
      width:100%;
      padding:0 20px;
      text-align: center;
      h3{
        color:#1c96d7;
        margin: 0 15px 10px;
        /*border-bottom: 1px #d6d6d6 solid;*/
        font-size: 20px;
        font-weight: normal;
      }
      /*修改input验证报错高度*/
      .ivu-form-item{
        margin-bottom: 20px;
        .ivu-form-item-error-tip{
          font-size: 10px;
          padding-top: 2px;
        }
      }
      p{
        margin:0;
        text-align: left;
        line-height: 22px;
      }
      .fromItems{
        margin-bottom:20px;
      }
      .verificationCode_box{
        margin-bottom: 10px;
        .verificationCode_text{
          width: 60%;
        }
        .verificationCode{
          width:35%;
          height:32px;
          background: #ddd;
          margin-left: 5%;
          float:right
        }
      }
    }
  }
}
/*底部内容的样式*/
#footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 27px;
  background:#fff;
  line-height: 27px;
  box-shadow: 0 0 15px 5px rgba(100,100,100,0.2);
  p{
    text-align: center;
    font-size: 12px;
    color:#999;
  }
}
</style>
