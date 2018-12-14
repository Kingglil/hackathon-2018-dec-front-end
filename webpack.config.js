module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devServer: {
        contentBase: "./dist",
        publicPath: 'http://localhost:8080/'
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|gif)$/, use: [ { loader: 'file-loader', options: { } } ] }
        ]
    }
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }*/
};