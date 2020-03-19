devServer: {
    proxy: {
        '/api': {  // 带有/api开头的信息都会被代理到http://127.0.0.1:8080
            target: 'http://127.0.0.1:8080',
        }
    }
}