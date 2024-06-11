import{k as s,F as e,$ as n,B as a,W as o,M as t}from"./chunks/framework.e8799e72.js";import{_ as l}from"./chunks/demo-store-template.f0e12e8c.js";import{s as p}from"./chunks/stackblitz.5b6d7100.js";const r=o('<h1 id="demo-store-template" tabindex="-1">Demo Store Template <a class="header-anchor" href="#demo-store-template" aria-label="Permalink to &quot;Demo Store Template&quot;">​</a></h1><p><a href="https://frontends-demo.vercel.app/" target="_blank"><img src="'+l+'" alt="Demo Store Template Screenshot" class="border-1px border-#eeeeee rounded-md shadow-md my-8 hover:shadow-2xl hover:scale-105 transition duration-200"></a></p><p>The demo store template is a reference implementation of an online store UI.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <strong>Demo Store Template</strong> is not suitable for production stores. It is under constant development and does not adhere to any versioning. Please go to <a href="#limitations">Limitations</a> for more information.</p></div><h2 id="setup-run" tabindex="-1">Setup &amp; run <a class="header-anchor" href="#setup-run" aria-label="Permalink to &quot;Setup &amp; run&quot;">​</a></h2>',5),c=o('<p>Alternatively, set up the vue-demo-store template manually by running the following commands in a new directory:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tiged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shopware/frontends/templates/vue-demo-store</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo-store</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo-store</span></span>\n<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>\n<span class="line"></span></code></pre></div><h2 id="directory-structure" tabindex="-1">Directory structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory structure&quot;">​</a></h2><p>The directory structure is the same as in a <a href="https://nuxtjs.org/docs/get-started/directory-structure/" target="_blank" rel="noreferrer">default Nuxt project</a>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;">demo-store/</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ components/</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  ├─ layout/       </span><span style="color:#676E95;font-style:italic;">/* header, footer, account menu etc. */</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  ├─ checkout/     </span><span style="color:#676E95;font-style:italic;">/* cart items, cart overview */</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  ├─ account/      </span><span style="color:#676E95;font-style:italic;">/* order history, account settings */</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  ├─ shared/       </span><span style="color:#676E95;font-style:italic;">/* modals, notifications */</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  ├─ ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ layouts/</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─ checkout.vue  </span><span style="color:#676E95;font-style:italic;">/* minimal layout without navigation and footer */</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─ default.vue   </span><span style="color:#676E95;font-style:italic;">/* default layout with navigation and footer */</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ pages/</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─ checkout/     </span><span style="color:#676E95;font-style:italic;">/* checkout pages */</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─ account/      </span><span style="color:#676E95;font-style:italic;">/* user account pages */</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─ ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ app.vue          </span><span style="color:#676E95;font-style:italic;">/* app root component */</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ nuxt.config.ts   </span><span style="color:#676E95;font-style:italic;">/* app configuration */</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ package.json</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.json</span></span>\n<span class="line"></span></code></pre></div><p>The <code>components</code> directory contains components that have been extracted from their corresponding page components, so these become more readable. The components within <code>components</code> are organized based on the page and layout components they are used in. The <code>shared</code> directory contains generic components that are used across multiple pages and layouts.</p><h2 id="customizing-the-template" tabindex="-1">Customizing the template <a class="header-anchor" href="#customizing-the-template" aria-label="Permalink to &quot;Customizing the template&quot;">​</a></h2><p>There is no concept of overwriting components in the demo store template. Instead, all components are modified directly. When you create a new project, we recommend adding your custom Git repository as a remote repository and keeping the original demo store template as a second repository so that you can always pull changes manually (see als Git Docu <a href="https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" target="_blank" rel="noreferrer">Working with Remotes</a>).</p><div class="warning custom-block"><p class="custom-block-title">Updates &amp; Breaking Changes</p><p>The demo store template is a boilerplate, so it will constantly be updated, as we will continously add new features and make improvements. These updates include breaking changes. If you want to stay up to date with the latest changes, you need to keep your project in sync manually.</p></div><h3 id="cms-components" tabindex="-1">CMS Components <a class="header-anchor" href="#cms-components" aria-label="Permalink to &quot;CMS Components&quot;">​</a></h3><p>One exception to the rule are CMS components. CMS components are handled as a separate package <code>cms-base</code> in Shopware Frontends and can be updated automatically. However, you can still override the components from the package in your custom project.</p>',11),i=o('<h2 id="configure" tabindex="-1">Configure <a class="header-anchor" href="#configure" aria-label="Permalink to &quot;Configure&quot;">​</a></h2><p>The blank template is pre-configured to connect to a public Shopware backend, so you start building right away.</p><p>In order to connect it to your own store backend, you need to edit the <code>nuxt.config.ts</code> file and edit a configuration object with <code>shopware</code> as a key:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineNuxtConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shopware</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://your-business.shopware.store</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">accessToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">access-token-from-settings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// or</span></span>\n<span class="line"><span style="color:#A6ACCD;">  runtimeConfig: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">public</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shopware</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://your-business.shopware.store</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">accessToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">access-token-from-settings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p>You can also use <code>.env</code> file to override this configuration. More about this you can find <a href="https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables" target="_blank" rel="noreferrer">here</a></p><h2 id="limitations" tabindex="-1">Limitations <a class="header-anchor" href="#limitations" aria-label="Permalink to &quot;Limitations&quot;">​</a></h2><p>The <strong>Demo Store Template</strong> suggests how to build a store UI with Shopware Frontends. It does not make any assumptions about custom implementations and hence does not contain every feature of Shopware.</p><p>Some important limitations are</p><ul><li>Frontend settings are not synchronized from the backend - such as <ul><li>Available fields for checkout and registration</li><li>Multiple domains</li><li>Translations and snippets</li></ul></li><li>No support for multiple currencies</li></ul><p>If you think a specific feature should be part of the demo store template, feel free to create an <a href="https://github.com/shopware/frontends/issues/new" target="_blank" rel="noreferrer">issue</a> or make a <a href="https://github.com/shopware/frontends/pulls" target="_blank" rel="noreferrer">contribution</a>.</p>',10),u=JSON.parse('{"title":"Demo Store Template","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setup & run","slug":"setup-run","link":"#setup-run","children":[]},{"level":2,"title":"Directory structure","slug":"directory-structure","link":"#directory-structure","children":[]},{"level":2,"title":"Customizing the template","slug":"customizing-the-template","link":"#customizing-the-template","children":[{"level":3,"title":"CMS Components","slug":"cms-components","link":"#cms-components","children":[]}]},{"level":2,"title":"Configure","slug":"configure","link":"#configure","children":[]},{"level":2,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]}],"relativePath":"getting-started/templates/demo-store-template.md","filePath":"getting-started/templates/demo-store-template.md"}'),y={name:"getting-started/templates/demo-store-template.md"},d=Object.assign(y,{setup:o=>(o,l)=>{const u=t("PageRef");return s(),e("div",null,[r,n(u,{target:"blank",title:"Run on Stackblitz",page:"https://stackblitz.com/github/shopware/frontends/tree/main/templates/vue-demo-store",sub:"Open the Demo Store Template with our browser IDE in a new window",icon:a(p)},null,8,["icon"]),c,n(u,{page:"./../../framework/shopping-experiences",title:"Customize CMS Components",sub:"Override CMS components using the cms-base package"}),i])}});export{u as __pageData,d as default};
