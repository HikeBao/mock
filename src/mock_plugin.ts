import fs from "fs";
import path from "path";
import url from "url";
import { Plugin } from "vite";

interface Option {
  mockDirectory: string;
  mockFileExtension: ".js" | ".ts" | ".json";
  closeProxy?: boolean;
}

interface MockType {
  isProxy?: boolean;
  data: any;
  delayResponseTime?: number;
}

export function mockPlugin(opt: Option): Plugin {
  return {
    name: "mock_plugin",
    configureServer: async ({ middlewares }) => {
      middlewares.use((req, res, next) => {
        let parseURL = url.parse(req.url ?? "");
        let requestMthod = (req.method ?? "get").toLowerCase();
        let mockFilePath = path.join(
          process.cwd(),
          opt.mockDirectory,
          parseURL.pathname + opt.mockFileExtension
        );

        if (!fs.existsSync(mockFilePath)) {
          return next();
        }

        delete require.cache[require.resolve(mockFilePath)];

        let mockData: MockType = require(mockFilePath)[requestMthod];

        if (mockData?.isProxy && !opt.closeProxy) {
          return next();
        }

        // 删除对客户端无用代码
        delete mockData.isProxy;
        res.setHeader("Content-Type", "application/json");

        // 延迟返回
        setTimeout(() => {
          delete mockData.delayResponseTime;
          res.end(JSON.stringify(mockData));
        }, mockData.delayResponseTime ?? 0);
      });
    }
  };
}

