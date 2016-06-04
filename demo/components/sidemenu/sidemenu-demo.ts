import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {ButtonCheckbox} from 'ng2-bootstrap/ng2-bootstrap';
import {SIDEMENU_DIRECTIVES} from '../../../ng2-sidemenu';

// webpack html imports
let template = require('./sidemenu-demo.html');

@Component({
  selector: 'sidemenu-demo',
  template: template,
  directives: [NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, ButtonCheckbox, SIDEMENU_DIRECTIVES]
})
export class SidemenuDemoComponent {
}
