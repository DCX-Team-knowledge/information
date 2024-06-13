
import { api, LightningElement } from 'lwc';
export default class CommonButton extends LightningElement {
    static renderMode = 'light';
    @api
    disabled = false;

    /**
     * The assistive text for the button.
     * @type {?string}
     */
    @api
    assistiveText;

    /**
     * The button variant.
     * @type {?('primary' | 'secondary' | 'tertiary')}
     */
    @api
    variant;

    /**
     * The button size.
     * @type {?('small' | 'large')}
     */
    @api
    size;

    /**
     * The width of the button.
     * @type {?('stretch' | 'standard')}
     */
    @api
    width;

    /**
     * The alignment of the content inside the button.
     * @type {?('center' | 'left' | 'right')}
     */
    @api
    alignment;

    @api
    focus() {
        this.querySelector('button')?.focus();
    }
}
