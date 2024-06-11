import{_ as s,k as a,F as n,W as o}from"./chunks/framework.e8799e72.js";const p=JSON.parse('{"title":"Associations","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Associations"}],["meta",{"name":"og:description","content":"How to work with associations"}],["meta",{"name":"og:image","content":"https://frontends-og-image.vercel.app/Associations.png?fontSize=110px"}]],"nav":{"position":40}},"headers":[{"level":2,"title":"Product","slug":"product","link":"#product","children":[]}],"relativePath":"packages/api-client/docs/associations.md","filePath":"packages/api-client/docs/associations.md"}'),l={name:"packages/api-client/docs/associations.md"},e=[o('<h1 id="associations" tabindex="-1">Associations <a class="header-anchor" href="#associations" aria-label="Permalink to &quot;Associations&quot;">​</a></h1><p>Not all of the properties are added to the response by default. Some of them have to be added manually</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please remember that adding too many fields can affect the response time</p></div><p>More about <a href="https://shopware.stoplight.io/docs/store-api/cf710bf73d0cd-search-queries#associations" target="_blank" rel="noreferrer">associations</a> can be found here</p><h2 id="product" tabindex="-1">Product <a class="header-anchor" href="#product" aria-label="Permalink to &quot;Product&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> search </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useProductSearch</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> productResponse </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">search</span><span style="color:#A6ACCD;">(props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigationId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">withCmsAssociations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">criteria</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">associations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">manufacturer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div>',6)];const t=s(l,[["render",function(s,o,p,l,t,c){return a(),n("div",null,e)}]]);export{p as __pageData,t as default};
