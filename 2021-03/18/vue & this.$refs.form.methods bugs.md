# vue & this.$refs.form.methods bugs

![](https://img2020.cnblogs.com/blog/740516/202103/740516-20210318155012680-1234857143.png)

> 组件方法调用的 form不匹配

```js
    async saveClick () {
        // 调用 detailRef 组件的 copyPushClick 方法
        let params = this.$refs.detailRef.copyPushClick('detailsForm');
        console.log('tree click params ', JSON.stringify(params, null, 4));
        // 复制 推送 校验
        console.log('this.$refs.detailRef', this.$refs.detailRef);
        console.log('this.selfMenuKey', this.selfMenuKey);
        // ✅
        if(this.selfMenuKey  !== 'campaign') {
            const isValidate = this.$refs.detailRef.copyPushFormChecker('detailsForm');
            if(!isValidate) {
                return;
            }
        }
        // ❌
        // const isValidate = this.$refs.detailRef.copyPushFormChecker('detailsForm');
        // if(!isValidate) {
        //     return;
        // }
  }

```





## refs

https://developer.aliyun.com/article/712112

https://github.com/vuejs/vue/issues/3842

***

<div>
  <a href="https://info.flagcounter.com/QIXi">
    <img src="https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="Flag Counter" border="0">
  </a>
</div>


***

<blockquote style="display: flex; flex-flow: column; align-items: center; justify-content: center; text-align: center; border: none;">
  <h3><strong><span style="font-size: 16pt; color: #00ff00;">&copy;xgqfrms 2012-<span data-uid="copyright-aside">2020</span></strong></span</h3>
  <p><span style="font-size: 18pt; color: #00ff00;"><strong>www.cnblogs.com 发布文章使用：只允许注册用户才可以访问！</strong></span></p>
  <p><span style="font-size: 18pt; color: #00ff00;"><strong>原创文章，版权所有©️xgqfrms, 禁止转载 🈲️，侵权必究⚠️！</strong></span></p>
</blockquote>

***
