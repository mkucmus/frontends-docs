import{_ as s,k as a,F as n,W as o}from"./chunks/framework.e8799e72.js";const t=JSON.parse('{"title":"Work with the cart","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Building a Cart"}],["meta",{"name":"og:description","content":"In this chapter you will learn how to create and manage a cart."}],["meta",{"name":"og:image","content":"https://frontends-og-image.vercel.app/Building%20a%20**Cart**.png?fontSize=150px"}]],"nav":{"position":40}},"headers":[{"level":2,"title":"Create a cart","slug":"create-a-cart","link":"#create-a-cart","children":[]},{"level":2,"title":"Add items to the cart","slug":"add-items-to-the-cart","link":"#add-items-to-the-cart","children":[{"level":3,"title":"Add product to the cart","slug":"add-product-to-the-cart","link":"#add-product-to-the-cart","children":[]},{"level":3,"title":"Add promotion to the cart","slug":"add-promotion-to-the-cart","link":"#add-promotion-to-the-cart","children":[]}]},{"level":2,"title":"Display the cart items","slug":"display-the-cart-items","link":"#display-the-cart-items","children":[]},{"level":2,"title":"Change the quantity of a cart item","slug":"change-the-quantity-of-a-cart-item","link":"#change-the-quantity-of-a-cart-item","children":[]},{"level":2,"title":"Remove a cart item","slug":"remove-a-cart-item","link":"#remove-a-cart-item","children":[]}],"relativePath":"getting-started/e-commerce/cart.md","filePath":"getting-started/e-commerce/cart.md"}'),e={name:"getting-started/e-commerce/cart.md"},l=[o('<h1 id="work-with-the-cart" tabindex="-1">Work with the cart <a class="header-anchor" href="#work-with-the-cart" aria-label="Permalink to &quot;Work with the cart&quot;">​</a></h1><p>In this chapter you will learn how to</p><ul><li>Create a cart</li><li>Add products and promotions to a cart</li><li>Remove items from the cart</li><li>Display the cart</li></ul><h2 id="create-a-cart" tabindex="-1">Create a cart <a class="header-anchor" href="#create-a-cart" aria-label="Permalink to &quot;Create a cart&quot;">​</a></h2><p>You don&#39;t need to create a cart explicitly. Upon calling <code>refreshCart</code>, a new cart will be created if it doesn&#39;t exist yet. A new cart contains no items.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Internally, Shopware&#39;s Store API uses the <code>sw-context-token</code> header parameter to identify the current user and their cart.</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> refreshCart </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">refreshCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p>The <code>refreshCart</code> method is called automatically after any action within the cart (add product, remove item, etc.), but can be used explicitly if there was some request made outside the composables, for the same session context.</p><p>In a real application, we encourage you to use the <code>refreshCart</code> method in client-side calls only (for example using the <code>onMounted</code> nuxt hook) - unless required otherwise. It&#39;s useful to keep an eye on your browser&#39;s network tab to see if there are too many requests to the cart endpoint.</p><h2 id="add-items-to-the-cart" tabindex="-1">Add items to the cart <a class="header-anchor" href="#add-items-to-the-cart" aria-label="Permalink to &quot;Add items to the cart&quot;">​</a></h2><p>The <code>useCart</code> composable also offers methods to add items to the cart, such as</p><ul><li>Products</li><li>Promotions</li></ul><h3 id="add-product-to-the-cart" tabindex="-1">Add product to the cart <a class="header-anchor" href="#add-product-to-the-cart" aria-label="Permalink to &quot;Add product to the cart&quot;">​</a></h3><p>You can use the <code>useAddToCart</code> composable to add a product to the cart:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> product</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Product</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7b5b97bd48454979b14f21c8ef38ce08</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> addProduct</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> quantity</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getAvailableStock </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAddToCart</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  product</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  Only {{ getAvailableStock }} in stock</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">quantity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">addToCart()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Add to cart</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="add-promotion-to-the-cart" tabindex="-1">Add promotion to the cart <a class="header-anchor" href="#add-promotion-to-the-cart" aria-label="Permalink to &quot;Add promotion to the cart&quot;">​</a></h3><p>The process of adding a promotions code is just as straightforward as adding a product to the cart. You can use the <code>appliedPromotionCodes</code> field to receive a list of all applied promotion codes.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> promotionCode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> addPromotionCode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> appliedPromotionCodes </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">promotionCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">addPromotionCode(promotionCode)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apply promotion code</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Promitions will appear as a line item in the cart with a negative price.</p><h2 id="display-the-cart-items" tabindex="-1">Display the cart items <a class="header-anchor" href="#display-the-cart-items" aria-label="Permalink to &quot;Display the cart items&quot;">​</a></h2><p>Once the products are added to the cart, the can be accessed through the <code>cartItems</code> reference. In a similar fashion, you can access other information like <code>totalPrice</code>, <code>subtotal</code> or <code>cartErrors</code> which can occur in the case of invalid cart configurations.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> cartItems</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> totalPrice</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  Items in the cart: {{ count }}</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  Total price: {{ totalPrice }}</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cartItem in cartItems</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cartItem.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      {{ cartItem.label }} - {{ cartItem.price.totalPrice }}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Find a table of commonly used properties of cart items below:</p><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>The unique identifier of the cart item</td></tr><tr><td><code>referencedId</code></td><td>Depends on <code>item.type</code><br><code>product</code>: ID of the referenced product<br><code>promotion</code>: Promotion code if applicable</td></tr><tr><td><code>label</code></td><td>The label of the cart item</td></tr><tr><td><code>price</code></td><td><code>totalPrice</code>: The total price of the cart item (can be negative)<br><code>unitPrice</code>: Price per unit<br><a href="./prices.html">More about Prices</a></td></tr><tr><td><code>quantity</code></td><td>The quantity of units of the cart item</td></tr><tr><td><code>type</code></td><td>The type of the cart item - <code>product</code> or <code>promotion</code></td></tr><tr><td><code>cover</code></td><td>The cover image of the cart item</td></tr></tbody></table><h2 id="change-the-quantity-of-a-cart-item" tabindex="-1">Change the quantity of a cart item <a class="header-anchor" href="#change-the-quantity-of-a-cart-item" aria-label="Permalink to &quot;Change the quantity of a cart item&quot;">​</a></h2><p>The <code>changeProductQuantity</code> method can be used to change the quantity of a cart item.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> changeProductQuantity </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cartItem</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LineItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7b5b97bd48454979b14f21c8ef38ce08</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">changeProductQuantity</span><span style="color:#A6ACCD;">(cartItem)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h2 id="remove-a-cart-item" tabindex="-1">Remove a cart item <a class="header-anchor" href="#remove-a-cart-item" aria-label="Permalink to &quot;Remove a cart item&quot;">​</a></h2><p>You can remove items from the cart using the <code>useCart</code> or the <code>useCartItem</code> composables:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> removeItem </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7b5b97bd48454979b14f21c8ef38ce08</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p>In case of the <code>useCartItem</code> composable, you pass the item identifier when calling the composable, but not when calling the <code>removeItem</code> method.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> cartItem </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toRefs</span><span style="color:#A6ACCD;">(props)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> removeItem </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCartItem</span><span style="color:#A6ACCD;">(cartItem)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeItem</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div>',32)];const p=s(e,[["render",function(s,o,t,e,p,c){return a(),n("div",null,l)}]]);export{t as __pageData,p as default};
