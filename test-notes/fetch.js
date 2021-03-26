


// this.loading = false;
fetch('')
.then((res) => {
  // if(res?.status === 200) {
  //   console.log('ok', res);
  // }
  console.log('ok', res);
  return res;
}).catch((err) => {
  console.log('error', err);
  return err;
}).finally((ok, err) => {
  console.log('finally', ok, err);
  // this.loading = false;
});



fetch('https://cdn.xgqfrms.xyz/json/fast/1.json')
.then((res) => {
  if(res?.status === 200) {
    console.log('res', res);
    return res.json();
  } else {
    throw new Error(`http error, http status code = ${res?.status}`);
  }
})
.then((json) => {
  console.log('json', json, JSON.stringify(json, null, 4));
  return json;
})
.catch((err) => {
  console.log('error', err);
  return err;
})
.finally(() => {
  // finally 不会收到任何 Promise 的信息，只会保证在最后一定执行
  console.log('finally clean action')
  // this.loading = false;
});
// .finally((ok, err) => {
//   console.log('finally', ok, err);
//   // this.loading = false;
// });
