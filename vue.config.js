module.exports = {
    devServer: {
        proxy: { //http://www.asjyy.com/index.php?r=index/ajaxnew&page=1
            '/index': {
                target: 'http://www.asjyy.com',
                host: 'www.asjyy.com',
                changeOrigin: true
                // pathRewrite: {
                //     '^/v4/api': '/v4/api'
                //   }
            },
            //http://m.biyao.com/classify 必要mail navbar导航
            '/classify': {
                target: 'http://m.biyao.com',
                host: 'm.biyao.com',
                changeOrigin: true
                // pathRewrite: {
                //     '^/v4/api': '/v4/api'
                //   }
            },
        }
    }
}
