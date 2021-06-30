import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://47.118.24.31/weiye-api/index.php/':'/v1';

export function fetch(options) {
    let { url, type, data, header, loading } = options;
    let config = {
        url,
        method: type || 'GET',
        loading: loading == false ? false : true
    }
    //config.url += `?ie_cache=${Math.random()}`;
    if (type && (type.toUpperCase() == 'POST')) {
        config.data = data || {};
    } else {
        config.params = data || {};
    }

    let headers = {
           'Content-Type': 'application/json',
           'Authorization':sessionStorage.getItem('token_pc')||'',
           'Platform':30
    }
    if (header) headers = Object.assign(headers, header);
    return new Promise((resolve, reject) => {
        //let Load = null;
        //if (config.loading) Load = Loading.service({ text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, .3)' })
        const instance = axios.create({
            baseURL: baseURL,
            headers,
            timeout: 6000,
        });
        //请求成功后执行的函数
        instance(config).then(res => {
            //if (config.loading) Load.close();
            resolve(res.data);
            const status = res.data.returnCode;
            switch(status){
                case '0014':

            }
            // if(res.data.returnCode=='0014'){
            //     this.$message('登录失效，请重新登录!');
            //     window.sessionStorage.removeItem('token_pc');
            //     this.$router.push({path:'/login',query:{url:decodeURI(location.href)}});
            // }
        }).catch(err => {
            console.log(err, 'error')
            //if (config.loading) Load.close();
            reject(err);
        })
    });
}