import {
  StatefulElement,
  AttributeBinding
} from '@helio/wc-core';

/**
 * @description This is an example of the components you will create. It must extend some kind of html element
 * You must also register it after the class definition as a custom element
 * 
 * @class ComponentName class
 * @example
 * export const wcComponentName = customElements.define('component-name', ComponentName);
 * @extends HTMLElement
 */
export class ComponentName extends HTMLElement {

  /**
   * constructor - called when the element is created or upgraded
   *
   * @param  {type} self inherited properties from HTMLElement
   * @return {type}      inherited properties from HTMLElement
   */
  constructor(self) {
    self = super(self);
    return self;
  }

  /**
   * @static get - Configure attributes for attributeChangedCallback
   * setters/getters will be automatically injected 
   *
   * @return {Array}  array of strings
   */
  static get observedAttributes() {
    return ['thing'];
  }

  /**
   * Not applicable if not using the StatefulElement mixin;
   * @static get - When combined with the StatefulElement mixin, Attributes that are emitted as state. If not defined, will default to observedAttributes. 
   * @return {Array}  description
   */
  static get stateAttributes() {
    return ['colorid'];
  }

  /**
   * get value - Properties bound to attributes
   * 
   * @return {String} thing description from element attribute
   */
  get thing() {
    return this.getAttribute('thing');
  }

  /**
   * set value - Properties bound to attributes
   * this will be automatically injected if present in the {@link ComponentName.observedAttributes} or {@link ComponentName.stateAttributes}
   *
   * @param  {String} val description to be set on the element attribute
   */
  set thing(val) {
    this.setAttribute('thing', val);
  }

  /**
   * connectedCallback - Called when the element is inserted into a document, including into a shadow tree
   *  This is where you need to handle dom modifications that may have happened BEFORE modifications become observeable
   * Note: not all content may be rendered at this point, you must be ready to handle the content as it becomes available
   *
   * @return {void}  description
   */
  connectedCallback() {
    // Custom Elements added DOM
    this.innerHTML = this.componentName();
  }

  /**
   * disconnectedCallback - Called when the element is removed from a document
   *    - Use this callback to perform any cleanup (remove dom elements that are not contained, restore state, etc)
   *
   * @return {void}  description
   */
  disconnectedCallback() {

  }

  /**
   * attributeChangedCallback - Called when an attribute is changed, appended, removed, or replaced on the element
   *
   * @param  {String} attributeName description
   * @param  {String} oldValue      description
   * @param  {String} newValue      description
   * @return {void}               description
   */
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName === 'colorid'){
      this.querySelector('.hero').style.backgroundColor = newValue;    
    }
  }

  /**
   * adoptedCallback - Called when the element is adopted into a new document
   *
   * @param  {HTMLDocument} oldDocument description
   * @param  {HTMLDocument} newDocument description
   * @return {void}             description
   */
  adoptedCallback(oldDocument, newDocument) { // eslint-disable-line no-unused-vars

  }


  get colors() {
    return ['gold', 'cyan', 'red', 'purple', 'blue', 'green', 'turquoise', 'magenta'];
  }

  get colorsView() {
    let list= [];
    this.colors.forEach((value) => {
      list.push(this.demoItem.call({
        name: value,
        id: value
      }));
    });
    return list.join('');
  }

  setCurrentColor(event) {
    this.colorid = event.target.id;
  }

  /**
   * @file ./*.html
   * *.html templates in the same folder will be auto-injected as functions that return template literals with the HTMLMinified content of the file.
   * you can use es6 syntax within the html file to create 1-way data-bindings
   * you can also use the wc-translate tag from @helio/wc-i18n to traslate your strings.
   * @example 
   * 
   * <h1 style="background-color: ${this.headerColor}"><wc-translate>demo</wc-translate></h1>
   * <div class="subhero"><wc-translate>demo2</wc-translate></div>
   * <ul>
   *    ${this.colorsView}
   * </ul>
   * 
   */
}
export const wcComponentName = customElements.define('component-name', StatefulElement(AttributeBinding(ComponentName)));