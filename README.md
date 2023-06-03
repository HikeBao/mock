> 针对 vite 而写的一个 mock 数据插件

#### 使用方式

```javascript
import { mockPlugin } from "@hike/vite_plugin";
{
  ...
    plugins: [
      vue(),
      mockPlugin({
        mockDirectory: "mock",
        mockFileExtension: ".js",
        closeProxy?: false // 全局关闭代理
      })
    ]
  ...
}
```
