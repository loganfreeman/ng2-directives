import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {SidemenuDemoComponent} from './sidemenu/sidemenu-demo';

let name = 'Sidemenu';
// webpack html imports
let doc = require('../../components/sidemenu/readme.md');

let tabDesc:Array<any> = [
  {
    heading: 'Sidemenu',
    ts: require('!!prismjs?lang=typescript!./sidemenu/sidemenu-demo.ts'),
    html: require('!!prismjs?lang=markup!./sidemenu/sidemenu-demo.html')
  }
];

let tabsContent:string = ``;
tabDesc.forEach((desc:any) => {
  tabsContent += `
  <div *ngIf="currentHeading === '${desc.heading}'">
    <${desc.heading.toLowerCase()}-demo>
    </${desc.heading.toLowerCase()}-demo>
  </div>
<pre>{{ currentHeading }}</pre>
<tab heading="${desc.heading}" (select)="select_zzz($event)">
  <div class="card card-block panel panel-default panel-body">
    <br>

    <div class="row" style="margin: 0px;">
      <tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ngNonBindable>${desc.html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript">
              <code class="language-typescript" ngNonBindable>${desc.ts}</code>
            </pre>
          </div>
        </tab>
      </tabset>
    </div>
  </div>
</tab>
  `;
});

@Component({
  selector: 'sidemenu-section',
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <tabset>

        ${tabsContent}

      </tabset>
    </div>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  directives: [SidemenuDemoComponent, TAB_DIRECTIVES, CORE_DIRECTIVES]
})
export class SidemenuSectionComponent {
  public currentHeading:string = 'Sidemenu';

  public select_zzz(e:any):void {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}
