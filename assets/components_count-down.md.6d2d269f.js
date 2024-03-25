import{o as n,c as t,a}from"./app.8cddb23b.js";const s='{"title":"CountDown","description":"","frontmatter":{},"headers":[{"level":2,"title":"CountButton","slug":"countbutton"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"CountDownInput","slug":"countdowninput"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"}],"relativePath":"components/count-down.md","lastUpdated":1711338181310}',p={},o=a('<h1 id="countdown"><a class="header-anchor" href="#countdown" aria-hidden="true">#</a> CountDown</h1><p>倒计时组件</p><h2 id="countbutton"><a class="header-anchor" href="#countbutton" aria-hidden="true">#</a> CountButton</h2><p>倒计时按钮组件</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountButton</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountDown&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> CountButton <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>绑定值</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>倒计时时间</td></tr><tr><td>beforeStartFunc</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>倒计时之前执行的函数，返回 true 才会开始执行</td></tr></tbody></table><h2 id="countdowninput"><a class="header-anchor" href="#countdowninput" aria-hidden="true">#</a> CountDownInput</h2><p>倒计时输入框按钮组件</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountdownInput</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountDown&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>绑定值</td></tr><tr><td>size</td><td><code>string</code></td><td><code>&#39;default&#39;, &#39;large&#39;, &#39;small&#39;</code></td><td>-</td><td>输入框即按钮大小</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>倒计时时间</td></tr><tr><td>sendCodeApi</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>倒计时之前执行的函数，返回 true 才会开始执行</td></tr></tbody></table>',14);p.render=function(a,s,p,e,c,u){return n(),t("div",null,[o])};export default p;export{s as __pageData};
