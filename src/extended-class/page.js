//@babel/polyfill deprecated.
// import "core-js/stable";
import "regenerator-runtime/runtime.js";

import Tracker from "../components/tracker/index.js";
import Scroll from "../components/scroll/index.js";

export default class Page {
    constructor(options) {
        this.default = {
            "ads": true,
            "refresh": true,
            "refreshTime": 30,
            "scrollEvents": {
                "scroll": true,
                "events": []
            },
            "trackerClickClass": ".gtm-click",
            "trackerViewClass": [".gtm-view-class"]
        };
        this.options = { ...this.default, ...options }; //merge
        this.tracker = new Tracker();
        this.scroll = new Scroll();
    }

    Load() {
        if (this.options.scrollEvents.scroll) {
            this.scroll.On((properties) => { // return {x,y,direction}
                this.scroll.ScrollEvents(properties, this.options.scrollEvents.events); //page custom scroll Events
                if (this.options.trackerViewClass) {
                    this.tracker.ElementViewTrack(this.options.trackerViewClass); //default view object set
                }
            });
        }
    }
}