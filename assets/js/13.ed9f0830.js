(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{450:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"rxjs-系列故事-1-理解响应式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-系列故事-1-理解响应式编程"}},[t._v("#")]),t._v(" RxJS 系列故事(1)——理解响应式编程")]),t._v(" "),a("p",[t._v("在学习 RxJS 的过程中，我发现很多概念晦涩难懂，比如：响应式编程、观察者模式、各种各样的操作符以及多播等等。理解这些概念通常会花费大量时间，而且很难将它们吃透。于是我就写了一个关于「大学生创业」的小故事，以帮助大家理解 RxJS 的核心概念。")]),t._v(" "),a("p",[t._v("故事的主角小王是一个计算机专业的大学生，接下来让我们先跟随小王的脚步，去理解命令式编程、声明式编程以及响应式编程。")]),t._v(" "),a("h2",{attrs:{id:"命令式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令式编程"}},[t._v("#")]),t._v(" 命令式编程")]),t._v(" "),a("blockquote",[a("p",[t._v("小王毕业之后就回老家开了一家超市。小王一个人忙不过来，于是就雇了李叔来店里帮忙。为了更好地了解超市的经营状况，小王就让李叔去统计一下上周的总支出。可李叔哪会这个呀，于是小王只好交代清楚每一个步骤：")]),t._v(" "),a("p",[t._v("1、记录每天的支出")]),t._v(" "),a("p",[t._v("2、将一周内每天的支出加起来")]),t._v(" "),a("p",[t._v("3、将结果发给老板")])]),t._v(" "),a("p",[a("strong",[t._v("在处理问题时，命令式编程需要通过编程语言的循环语句(for/while)或条件语句(switch/if)等，去描述清楚每一步要怎么做（How），才能达到最终的结果（What）。")])]),t._v(" "),a("p",[t._v("用命令式的方式，来计算总支出，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotalCosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("李叔按照小王的指令计算好了总支出。但小王得知后却有点苦恼，因为支出的费用比较高。于是，就让李叔赶紧再算一下：如果每天减少百分之十的支出，看看一周能省多少钱？可李叔还是不知道如何计算。小王心想，这不就和之前差不多吗？没办法，还是只有手把手教：")]),t._v(" "),a("p",[t._v("1、记录每天的支出")]),t._v(" "),a("p",[t._v("2、将每天的支出乘以0.9")]),t._v(" "),a("p",[t._v("3、将一周内每天的支出加起来")]),t._v(" "),a("p",[t._v("4、将结果发给老板")])]),t._v(" "),a("p",[t._v("用命令式的方式，来计算减少后的总支出，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReducedCosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("是不是感觉很重复？这就是命令式编程的一个问题。现实中的很多问题都具有「相似的模式」，如果将这些模式抽象出来，就可以减少大量重复代码。")])]),t._v(" "),a("h2",{attrs:{id:"声明式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明式编程"}},[t._v("#")]),t._v(" 声明式编程")]),t._v(" "),a("blockquote",[a("p",[t._v("小王觉得只统计支出还不够，也需要关注店里的营业额。但店里的事情太多了，手把手教李叔去做真的很累。于是，他便让学财务的表妹过来帮忙。这样小王只需告诉表妹：帮我统计一下今天店里的营业额，即可。至于怎么计算营业额，表妹自有办法解决。")])]),t._v(" "),a("p",[a("strong",[t._v("在处理问题时，声明式编程只需描述要做什么（What），而不需要告诉机器具体要怎么做（How）。")])]),t._v(" "),a("p",[t._v("用声明式的方式，来计算之前的两个问题，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getTotalCosts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getReducedCosts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("costs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" costs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("可以看到，代码简洁了很多。在命令式编程中的循环语句，都被封装到了 reduce 函数中。这让开发效率有了提升。此外，声明式编程也是函数式编程的基础。")])]),t._v(" "),a("h2",{attrs:{id:"响应式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式编程"}},[t._v("#")]),t._v(" 响应式编程")]),t._v(" "),a("blockquote",[a("p",[t._v("虽然表妹的到来给小王减轻了不少负担，但这样的管理模式，对学计算机的他而言还是不够智能。于是，他就买了一个商家管理系统。只要卖出一件商品，系统就会自动计算营业额，这样小王随时想查看报表都没问题。因为报表会「响应」商品的变化。")])]),t._v(" "),a("p",[t._v("响应式编程是一种面向「数据流」和「变化传播」的编程范式（来自"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),a("OutboundLink")],1),t._v("）。有点难懂是不是？ 不过我们可以这么来理解：")]),t._v(" "),a("p",[t._v("数据流可以想象成在超市结账时的发生的一系列事件，比如：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-------薯片x1------泡凤爪x1------无糖可乐x3------饼干x2------时间轴---\x3e\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("而变化传播可以用收银台变化着的总价来理解：随着收银员描完一件件商品的二维码，屏幕上显示的总价格也在不断发生改变。")]),t._v(" "),a("p",[t._v("响应式编程与我们之前提到的命令式编程、声明式编程有很大的不同。不管是命令式编程还是声明式编程，描述的都是一个「瞬时」的过程。就好比让表妹去计算一下目前的营业额，等表妹计算完之后，即便有新的商品卖出，这个数字也不会再发生变化，除非重新计算一次。")]),t._v(" "),a("p",[t._v("而响应式编程更多的是对关系的描述。比如：营业额 = 卖出商品的价格之和。只要有新的商品卖出，营业额就会随之发生变化。")]),t._v(" "),a("p",[t._v("于我而言，响应式编程带来的更多是思维方式上的转变，也就是从「pull」到「push」模式的转变。而「pull」和「push」都是从「数据消费者」的角度来描述的。比如我想获取某个数据，那么我就去调用某个函数，这是主动「pull」的过程。而当我订阅一个数据源之后，数据就会在合适的时机推送给我，这是「push」模式。")]),t._v(" "),a("p",[t._v("在响应式编程中，「预铺设管道」非常重要，当我们将管道铺设好之后，数据就会随着管道流动，一切都会按照我们预设的逻辑发生。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("通过小王的创业故事，我们了解了命令式编程、声明式编程和响应式编程。下面，让我们再回顾一下它们的特点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("命令式编程：需要描述清楚每一步要怎么做（How），才能达到最终的结果（What）。")])]),t._v(" "),a("li",[a("p",[t._v("声明式编程：只需描述要做什么（What），而不需要告诉机器具体要怎么做（How）。")])]),t._v(" "),a("li",[a("p",[t._v("响应式编程：基于数据流和变化传播。体现了响应变化的过程。")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/34445114")]),t._v(" "),a("p",[t._v("https://blog.51cto.com/liukang/2090170")]),t._v(" "),a("p",[t._v("https://www.infoq.cn/article/kzyb9IEj6iyHegBNrLgd")])])}),[],!1,null,null,null);s.default=e.exports}}]);