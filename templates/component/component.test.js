const ComponentName = customElements.get('component-name');

let componentNameInstance;

describe('ComponentName', () => {
    beforeEach(() => {
        componentNameInstance = new ComponentName();
        componentNameInstance.connectedCallback();
    });

    it('should inherit an HTML element', () => {
        expect(componentNameInstance instanceof HTMLElement).toBe(true);
    });

    describe('connectedCallback', () => {
        it('should set the innerHTML', () => {
            expect(componentNameInstance.innerHTML).toEqual(componentNameInstance.componentName());
        });
    });

    describe('colors', () => {
        it('should have 8 colors in the array', () => {
            expect(componentNameInstance.colors.length).toEqual(8);
        });
    });

    describe('colorsView', () => {
        let testElement;
        beforeEach(() => {
            //create a div we are going to render the content into
            testElement = document.createElement('div');
            //set the content of the html
            testElement.innerHTML = componentNameInstance.colorsView;
        });

        it('should return an HTML string containing an <li> for each color', () => {
            //count the immediate children and ensure it matches the expected count
            expect(testElement.childElementCount).toEqual(8);
        });
    })
});