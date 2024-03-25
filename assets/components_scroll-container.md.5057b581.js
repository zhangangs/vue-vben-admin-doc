import{o as n,c as a,a as s}from"./app.8cddb23b.js";const t='{"title":"ScrollContainer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/scroll-container.md","lastUpdated":1711338181314}',p={},o=s('<h1 id="scrollcontainer"><a class="header-anchor" href="#scrollcontainer" aria-hidden="true">#</a> ScrollContainer</h1><p>参考 <code>element-ui</code> 的 el-scrollbar 组件实现</p><p>滚动容器组件</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollTo(100)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>滚动到100px位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollTo(800)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>滚动到800px位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollTo(0)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>滚动到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollBottom()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>滚动到底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollContainer</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index in 100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>{{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollContainer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollContainer<span class="token punctuation">,</span> ScrollActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> CollapseContainer<span class="token punctuation">,</span> ScrollContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> scrollRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>ScrollActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> <span class="token function-variable function">getScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> scroll <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>scrollRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>scroll<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;scroll is Null&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> scroll<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">function</span> <span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token parameter">top<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">getScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">function</span> <span class="token function">scrollBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">getScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">scrollBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        scrollTo<span class="token punctuation">,</span>\n        scrollRef<span class="token punctuation">,</span>\n        scrollBottom<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.scroll-wrap</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>getScrollWrap</td><td><code>()=&gt;HtmlElement</code></td><td>获取滚动容器 el</td></tr><tr><td>scrollBottom</td><td><code>Function</code></td><td>滚动到底部</td></tr><tr><td>scrollTo</td><td><code>Function(to:number,duration = 500)</code></td><td>滚动到指定位置</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认区域</td></tr></tbody></table>',9);p.render=function(s,t,p,c,e,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
