import{_ as e,k as n,F as a,W as o}from"./chunks/framework.e8799e72.js";const t=JSON.parse('{"title":"Work with languages","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Work with languages"}],["meta",{"name":"og:description","content":"How to build multi languages site"}],["meta",{"name":"og:image","content":"https://frontends-og-image.vercel.app/Work%20with%20**languages**.png?fontSize=150px"}]]},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Routing","slug":"routing","link":"#routing","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"localeId","slug":"localeid","link":"#localeid","children":[]}],"relativePath":"getting-started/languages.md","filePath":"getting-started/languages.md"}'),s={name:"getting-started/languages.md"},l=[o('<h1 id="work-with-languages" tabindex="-1">Work with languages <a class="header-anchor" href="#work-with-languages" aria-label="Permalink to &quot;Work with languages&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is the implementation working with <code>vue-demo-store</code> template only. To see the details, please go to the <code>templates/vue-demo-store</code> directory in the repository.</p></div><p>Each store has two sources of translations.</p><p>Backend source for:</p><ul><li>CMS translations</li><li>Product and categories</li><li>Routing paths</li></ul><p>Frontend source for:</p><ul><li>All static content declared on the frontend app</li></ul><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>More about backend translations can be found <a href="https://docs.shopware.com/en/shopware-6-en/tutorials-and-faq/translations" target="_blank" rel="noreferrer">here</a></p><p>For the frontend app we recommend to use <code>vue-i18n</code> module.</p><p><strong><em>When you are using same domain:</em></strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Backend languages codes and frontend languages codes must be the same!</p></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>www.example.com         // GB site\nwww.example.com/de-DE   // DE site\n</code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>{\n  i18n: {\n    vueI18n: {\n      fallbackLocale: &quot;en-GB&quot;,\n    },\n    strategy: &quot;prefix_except_default&quot;,\n    defaultLocale: &quot;en-GB&quot;,\n    langDir: &quot;i18n/src/&quot;,\n    locales: [\n    {\n      code: &quot;en-GB&quot;,\n      iso: &quot;en-GB&quot;,\n      file: &quot;en-GB.ts&quot;,\n    },\n    {\n      code: &quot;de-DE&quot;,\n      iso: &quot;de-DE&quot;,\n      file: &quot;de-DE.ts&quot;,\n    },\n  ],\n  },\n}\n</code></pre></div><p><strong><em>When you are using different domains:</em></strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>www.example1.com     // GB site\nwww.example2.com     // DE site\n</code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>{\n  i18n: {\n    vueI18n: {\n      fallbackLocale: &quot;en-GB&quot;,\n    },\n    langDir: &quot;i18n/src/&quot;,\n    locales: [\n    {\n      domain: &#39;example1.com&#39;\n      code: &quot;en-GB&quot;,\n      iso: &quot;en-GB&quot;,\n      file: &quot;en-GB.ts&quot;,\n    },\n    {\n      domain: &#39;example2.com&#39;\n      code: &quot;de-DE&quot;,\n      iso: &quot;de-DE&quot;,\n      file: &quot;de-DE.ts&quot;,\n    },\n  ],\n  },\n}\n</code></pre></div><h2 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing&quot;">​</a></h2><p>When you are using <em>prefix</em> domain languages, you have to use <code>formatLink()</code> method from <code>useInternationalization</code> composable for building URLs. The main task of this composable is to add a prefix to URL if needed.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> localePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useLocalePath</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> formatLink </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useInternationalization</span><span style="color:#A6ACCD;">(localePath)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">NuxtLink</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">formatLink(&#39;/account&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Account</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">NuxtLink</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h2><p>If you want to test languages locally, and your local domain differs from what is declared on the backend, you can use environment variables.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>NUXT_PUBLIC_SHOPWARE_DEV_STOREFRONT_URL=http://127.0.0.1:3000\n</code></pre></div><h2 id="localeid" tabindex="-1">localeId <a class="header-anchor" href="#localeid" aria-label="Permalink to &quot;localeId&quot;">​</a></h2><p>In more complex scenarios, such as when different prefixes are used on the backend and frontend, the <code>localeId</code> attribute can be utilized.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>  i18n: {\n    strategy: &quot;prefix_except_default&quot;,\n    defaultLocale: &quot;en-GB&quot;,\n    detectBrowserLanguage: false,\n    langDir: &quot;./i18n/src/langs/&quot;,\n    vueI18n: &quot;./i18n/config&quot;,\n    locales: [\n      {\n        code: &quot;en-GB&quot;,\n        iso: &quot;en-GB&quot;,\n        file: &quot;en-GB.ts&quot;,\n      },\n      {\n        code: &quot;testde&quot;,\n        iso: &quot;de-DE&quot;,\n        file: &quot;de-DE.ts&quot;,\n        localeId: &quot;c19b753b5f2c4bea8ad15e00027802d4&quot;,\n      },\n    ],\n  },\n</code></pre></div><p>The <code>localeId</code> attribute corresponds to a specific language identifier, which can be located within the Shopware administrative panel. Additional information is available at this link: <a href="https://docs.shopware.com/en/shopware-6-en/settings/languages" target="_blank" rel="noreferrer">https://docs.shopware.com/en/shopware-6-en/settings/languages</a></p>',27)];const c=e(s,[["render",function(e,o,t,s,c,i){return n(),a("div",null,l)}]]);export{t as __pageData,c as default};
