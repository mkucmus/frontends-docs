import{_ as s,k as n,F as a,W as l}from"./chunks/framework.7ea3a455.js";const o=JSON.parse('{"title":"Create Blocks (CMS)","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Create Blocks (CMS)"}],["meta",{"name":"og:description","content":"In this chapter you will learn how to create CMS blocks."}],["meta",{"name":"og:image","content":"https://frontends-og-image.vercel.app/Create%20Blocks.png?fontSize=120px"}]],"nav":{"position":30}},"headers":[{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"getting-started/cms/create-blocks.md","filePath":"getting-started/cms/create-blocks.md"}'),e={name:"getting-started/cms/create-blocks.md"},p=[l('<h1 id="create-blocks-cms" tabindex="-1">Create Blocks (CMS) <a class="header-anchor" href="#create-blocks-cms" aria-label="Permalink to &quot;Create Blocks (CMS)&quot;">​</a></h1><p>Make sure, you&#39;ve created a new file as described in <a href="./customize-components.html#create-new-files">customize components</a>.</p><p>Next, import the correct type for your block and use it to define the <code>content</code> property:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- components/cms/CmsBlockImageThreeColumn.vue --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CmsBlockImageThreeColumn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@shopware-pwa/composables-next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CmsBlockImageThreeColumn</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">Only for <code>cms-base</code> package</p><p>Also here, if you are not using the <code>cms-base</code> package, you have to come up with your own implementation of a generic component that handles the slot resolution. In that case, please ignore the mentions of <code>CmsGenericElement</code>.</p></div><p>Since blocks are usually layouts, they have slots which can be filled with dynamic content - CMS elements. Since blocks are flexible, the specific type of the element is not known in advance.</p><p>For that reason, there&#39;s a generic element <code>CmsGenericElement</code> which can be placed in every slot. It receives the <code>content</code> configuration as its only prop.</p><p>Let&#39;s build the <code>image-three-column</code> block, which has three slots - <code>left</code>, <code>center</code> and <code>right</code>.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- components/cms/CmsBlockImageThreeColumn.vue --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid grid-cols-3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">props.content.slots.filter(</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">                (slot) =&gt; slot.slot === &#39;left&#39;)</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">props.content.slots.filter(</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">                (slot) =&gt; slot.slot === &#39;center&#39;)</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span></span>\n<span class="line highlighted"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">props.content.slots.filter(</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">                (slot) =&gt; slot.slot === &#39;right&#39;)</span></span>\n<span class="line highlighted"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>That works, but it&#39;s quite repetiive and hard to read. So we can use another composable <code>useCmsBlock</code> which makes our lives way easier.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CmsBlockImageThreeColumn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@shopware-pwa/composables-next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CmsBlockImageThreeColumn</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> getSlotContent </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCmsBlock</span><span style="color:#A6ACCD;">(props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> leftContent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSlotContent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rightContent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSlotContent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> centerContent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSlotContent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid grid-cols-3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">leftContent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">centerContent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CmsGenericElement</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rightContent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>No you can go ahead and override blocks and elements step by step.</p>',13)];const t=s(e,[["render",function(s,l,o,e,t,c){return n(),a("div",null,p)}]]);export{o as __pageData,t as default};
