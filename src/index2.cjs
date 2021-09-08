const htmlparser2 = require("htmlparser2");

const html = `    <div class="btn-group switch-view">
<label class="btn" ng-class="{active:$ctrl.insideView}" ng-click="$ctrl.toggleView()">
    {{ 'basket.viewInside' | translate }}
</label>
<label class="btn" ng-class="{active:!$ctrl.insideView}" ng-click="$ctrl.toggleView()">
    {{ 'basket.viewOutside' | translate }}
</label>
</div>
`
const dom = htmlparser2.parseDocument(html);

console.log(dom)