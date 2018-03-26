/**
 * 
 * Import strings here and call I18n.addStrings() with the supported locale identifier 
 * and the strings object exported from the language file
 * 
 * @name LanguageStrings
 * @example
 * import {I18n} from '@helio/wc-i18n';
 * 
 * import en_US_Strings from './languages/en_US';
 *
 * I18n.addStrings('en_US', en_US_Strings);
 *
 */
import {I18n} from '@helio/wc-i18n';

import en_US_Strings from './languages/en_US';

I18n.addStrings('en_US', en_US_Strings);