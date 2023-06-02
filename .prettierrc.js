module.exports = {
  // 缩进字节数
  tabWidth: 2,

  // 使用单引号代替双引号
  singleQuote: false,

  // 句尾添加分号
  semi: true,

  /**
   * 箭头函数参数只有一个是否要有小括号
   * avoid: x => x;
   * always: 总有括号
   */
  arrowParens: "always",

  /**
   * false: <div
   *            className=""
   *            style={{}}
   *         >
   *  true: <div
   *            className=""
   *            style={{}}>
   */
  bracketSameLine: true,

  // 在对象或数组最后一个元素后面是否加逗号
  trailingComma: "none",

  // 超过最大值换行
  printWidth: 160
};