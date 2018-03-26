## Classes

<dl>
<dt><a href="#ComponentName">ComponentName</a> ⇐ <code>HTMLElement</code></dt>
<dd><p>ComponentName class</p>
</dd>
<dt><a href="#ComponentName">ComponentName</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#Main">Main</a></dt>
<dd><p>if you add more components to the project you will need to add a line to this file (or other entry point):</p>
</dd>
<dt><a href="#PackageJSON">PackageJSON</a></dt>
<dd></dd>
<dt><a href="#LanguageStrings">LanguageStrings</a></dt>
<dd><p>Import strings here and call I18n.addStrings() with the supported locale identifier 
and the strings object exported from the language file</p>
</dd>
<dt><a href="#LanguageFile">LanguageFile</a></dt>
<dd><p>export a flat object of key/value paris for component labels. name the file based on the language/locale and import in strings.js</p>
</dd>
</dl>

<a name="ComponentName"></a>

## ComponentName ⇐ <code>HTMLElement</code>
ComponentName class

**Kind**: global class  
**Extends**: <code>HTMLElement</code>  

* [ComponentName](#ComponentName) ⇐ <code>HTMLElement</code>
    * [new exports.ComponentName()](#new_ComponentName_new)
    * [new ComponentName(self)](#new_ComponentName_new)
    * _instance_
        * [.thing](#ComponentName+thing) ⇒ <code>String</code>
        * [.thing](#ComponentName+thing)
        * [.connectedCallback()](#ComponentName+connectedCallback) ⇒ <code>void</code>
        * [.disconnectedCallback()](#ComponentName+disconnectedCallback) ⇒ <code>void</code>
        * [.attributeChangedCallback(attributeName, oldValue, newValue)](#ComponentName+attributeChangedCallback) ⇒ <code>void</code>
        * [.adoptedCallback(oldDocument, newDocument)](#ComponentName+adoptedCallback) ⇒ <code>void</code>
    * _static_
        * [.observedAttributes](#ComponentName.observedAttributes) ⇒ <code>Array</code>
        * [.stateAttributes](#ComponentName.stateAttributes) ⇒ <code>Array</code>

<a name="new_ComponentName_new"></a>

### new exports.ComponentName()
This is an example of the components you will create. It must extend some kind of html element
You must also register it after the class definition as a custom element

**Example**  
```js
export const wcComponentName = customElements.define('component-name', ComponentName);
```
<a name="new_ComponentName_new"></a>

### new ComponentName(self)
constructor - called when the element is created or upgraded

**Returns**: <code>type</code> - inherited properties from HTMLElement  

| Param | Type | Description |
| --- | --- | --- |
| self | <code>type</code> | inherited properties from HTMLElement |

<a name="ComponentName+thing"></a>

### componentName.thing ⇒ <code>String</code>
get value - Properties bound to attributes

**Kind**: instance property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>String</code> - thing description from element attribute  
<a name="ComponentName+thing"></a>

### componentName.thing
set value - Properties bound to attributes
this will be automatically injected if present in the [observedAttributes](#ComponentName.observedAttributes) or [stateAttributes](#ComponentName.stateAttributes)

**Kind**: instance property of [<code>ComponentName</code>](#ComponentName)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | description to be set on the element attribute |

<a name="ComponentName+connectedCallback"></a>

### componentName.connectedCallback() ⇒ <code>void</code>
connectedCallback - Called when the element is inserted into a document, including into a shadow tree
 This is where you need to handle dom modifications that may have happened BEFORE modifications become observeable
Note: not all content may be rendered at this point, you must be ready to handle the content as it becomes available

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  
<a name="ComponentName+disconnectedCallback"></a>

### componentName.disconnectedCallback() ⇒ <code>void</code>
disconnectedCallback - Called when the element is removed from a document
   - Use this callback to perform any cleanup (remove dom elements that are not contained, restore state, etc)

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  
<a name="ComponentName+attributeChangedCallback"></a>

### componentName.attributeChangedCallback(attributeName, oldValue, newValue) ⇒ <code>void</code>
attributeChangedCallback - Called when an attribute is changed, appended, removed, or replaced on the element

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| attributeName | <code>String</code> | description |
| oldValue | <code>String</code> | description |
| newValue | <code>String</code> | description |

<a name="ComponentName+adoptedCallback"></a>

### componentName.adoptedCallback(oldDocument, newDocument) ⇒ <code>void</code>
adoptedCallback - Called when the element is adopted into a new document

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| oldDocument | <code>HTMLDocument</code> | description |
| newDocument | <code>HTMLDocument</code> | description |

<a name="ComponentName.observedAttributes"></a>

### ComponentName.observedAttributes ⇒ <code>Array</code>
**Kind**: static property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>Array</code> - array of strings  
<a name="ComponentName.stateAttributes"></a>

### ComponentName.stateAttributes ⇒ <code>Array</code>
Not applicable if not using the StatefulElement mixin;

**Kind**: static property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>Array</code> - description  
<a name="ComponentName"></a>

## ComponentName
**Kind**: global class  

* [ComponentName](#ComponentName)
    * [new exports.ComponentName()](#new_ComponentName_new)
    * [new ComponentName(self)](#new_ComponentName_new)
    * _instance_
        * [.thing](#ComponentName+thing) ⇒ <code>String</code>
        * [.thing](#ComponentName+thing)
        * [.connectedCallback()](#ComponentName+connectedCallback) ⇒ <code>void</code>
        * [.disconnectedCallback()](#ComponentName+disconnectedCallback) ⇒ <code>void</code>
        * [.attributeChangedCallback(attributeName, oldValue, newValue)](#ComponentName+attributeChangedCallback) ⇒ <code>void</code>
        * [.adoptedCallback(oldDocument, newDocument)](#ComponentName+adoptedCallback) ⇒ <code>void</code>
    * _static_
        * [.observedAttributes](#ComponentName.observedAttributes) ⇒ <code>Array</code>
        * [.stateAttributes](#ComponentName.stateAttributes) ⇒ <code>Array</code>

<a name="new_ComponentName_new"></a>

### new exports.ComponentName()
This is an example of the components you will create. It must extend some kind of html element
You must also register it after the class definition as a custom element

**Example**  
```js
export const wcComponentName = customElements.define('component-name', ComponentName);
```
<a name="new_ComponentName_new"></a>

### new ComponentName(self)
constructor - called when the element is created or upgraded

**Returns**: <code>type</code> - inherited properties from HTMLElement  

| Param | Type | Description |
| --- | --- | --- |
| self | <code>type</code> | inherited properties from HTMLElement |

<a name="ComponentName+thing"></a>

### componentName.thing ⇒ <code>String</code>
get value - Properties bound to attributes

**Kind**: instance property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>String</code> - thing description from element attribute  
<a name="ComponentName+thing"></a>

### componentName.thing
set value - Properties bound to attributes
this will be automatically injected if present in the [observedAttributes](#ComponentName.observedAttributes) or [stateAttributes](#ComponentName.stateAttributes)

**Kind**: instance property of [<code>ComponentName</code>](#ComponentName)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | description to be set on the element attribute |

<a name="ComponentName+connectedCallback"></a>

### componentName.connectedCallback() ⇒ <code>void</code>
connectedCallback - Called when the element is inserted into a document, including into a shadow tree
 This is where you need to handle dom modifications that may have happened BEFORE modifications become observeable
Note: not all content may be rendered at this point, you must be ready to handle the content as it becomes available

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  
<a name="ComponentName+disconnectedCallback"></a>

### componentName.disconnectedCallback() ⇒ <code>void</code>
disconnectedCallback - Called when the element is removed from a document
   - Use this callback to perform any cleanup (remove dom elements that are not contained, restore state, etc)

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  
<a name="ComponentName+attributeChangedCallback"></a>

### componentName.attributeChangedCallback(attributeName, oldValue, newValue) ⇒ <code>void</code>
attributeChangedCallback - Called when an attribute is changed, appended, removed, or replaced on the element

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| attributeName | <code>String</code> | description |
| oldValue | <code>String</code> | description |
| newValue | <code>String</code> | description |

<a name="ComponentName+adoptedCallback"></a>

### componentName.adoptedCallback(oldDocument, newDocument) ⇒ <code>void</code>
adoptedCallback - Called when the element is adopted into a new document

**Kind**: instance method of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>void</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| oldDocument | <code>HTMLDocument</code> | description |
| newDocument | <code>HTMLDocument</code> | description |

<a name="ComponentName.observedAttributes"></a>

### ComponentName.observedAttributes ⇒ <code>Array</code>
**Kind**: static property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>Array</code> - array of strings  
<a name="ComponentName.stateAttributes"></a>

### ComponentName.stateAttributes ⇒ <code>Array</code>
Not applicable if not using the StatefulElement mixin;

**Kind**: static property of [<code>ComponentName</code>](#ComponentName)  
**Returns**: <code>Array</code> - description  
<a name="Main"></a>

## Main
if you add more components to the project you will need to add a line to this file (or other entry point):

**Kind**: global variable  
**Example**  
```js
export * from '../components/component-name/component-name.js';
```
**Example**  
```js
export * from 'external/dependency/location.js';
```
**Example**  
```js
export {SpecificDependency} from 'external/location.js';
```
**Example**  
```js
export * from '@helio/wc-ui';
```
<a name="PackageJSON"></a>

## PackageJSON
**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| exports | <code>Object</code> | Any named exports from here should have a 1:1 mapping to a file either in src ir lib (rollup output) directory. This is useful if you have a project that is deployed as an IIFE but you still have components you want to export independently. By default, any named exports defined here will be added to the rollup.imports object on projects that depend on this one. |
| rollup | <code>Object</code> | Rollup configuration object |
| rollup.externals | <code>Array.&lt;String&gt;</code> | npm package names or named imports to be considered external when rolled up. This is useful for A) when you have a component that depends on a vendor library that will be included on the page but not in your bundle or B) when you are exporting an ES module to be consumed. |
| rollup.entry | <code>Object</code> | The entry point for rollup to begin bundling. Typically, this will be a file in core named the same as your package. This file is your "Main" where your exports live. |
| rollup.format | <code>&quot;es&quot;</code> \| <code>&quot;iife&quot;</code> | The only two valid values are "es" and "iife". either you are creating a reusable component module (es) or a deployed application (iife). |
| rollup.imports | <code>Object</code> | This is for named imports that may come from other projects or you can define yourself. an Example would be the whatwg/fetch polyfill where we want a specific file from the npm package but not the default script specified in the watwg/fetch package.json |

**Example**  
```js
"exports": {
    "deployedApp": "node_modules/@helio/component/lib/app.js",
    "subComponentA": "node_modules/@helio/component/lib/componentA.js",
    "subComponentB": "node_modules/@helio/component/lib/componentB.js"
}
```
**Example**  
```js
"rollup": {
  "externals": [],
  "entry": "src/core/package.js",
  "format": "es",
  "imports": {}
},
```
**Example**  
```js
"externals": [
  "@helio/wc-utils",
  "@helio/wc-core",
  "@helio/wc-data",
  "@helio/wc-i18n", 
  "@helio/wc-ui"
]
```
**Example**  
```js
"entry": "src/core/package.js"
```
**Example**  
```js
"format": "es"
```
**Example**  
```js
"imports": {
  "namedDependency": "node_modules/file/not/specified/by/packagejson"
}
```
<a name="LanguageStrings"></a>

## LanguageStrings
Import strings here and call I18n.addStrings() with the supported locale identifier 
and the strings object exported from the language file

**Kind**: global variable  
**Example**  
```js
import {I18n} from '@helio/wc-i18n';

import en_US_Strings from './languages/en_US';

I18n.addStrings('en_US', en_US_Strings);
```
<a name="LanguageFile"></a>

## LanguageFile
export a flat object of key/value paris for component labels. name the file based on the language/locale and import in strings.js

**Kind**: global variable  
**Example**  
```js
export default {
  'demo': 'Hello, from NewProjectTest!',
  'demo2': 'Here is a list of my favorite colors'
}
```
