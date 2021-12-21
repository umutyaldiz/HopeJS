# @umutyaldiz/hopejs

FrontEnd Project Builder

  

# Installation

npm install @umutyaldiz/hopejs

  

# Components

import { Page, Slider, LazyLoad, isInViewport, Scroll, Tracker } from '@umutyaldiz/hopejs';

  

# Page //extended Class

    class Name extends Page {
    	constructor(options) {
    		super(options);
    	}
    	Init() {
    		super.Load();
    	}
    }

  

# Slider

    import Swiper, { Navigation, Pagination } from 'swiper'; //dependence
    
    new Slider({
    	'plugin':Swiper,
    	'modules': [Navigation, Pagination]
    });
    this.sliders.Init();

  

# LazyLoad

    import Blazy from 'blazy'; //dependence
    
    const lazyLoad = new LazyLoad();
    lazyLoad.Init({
    	plugin: Blazy,
    	selector: '[data-src]:not(.swiper-lazy)',
    	success: function (element) { }
    });

  

# isInViewport

    isInViewport(document.querySelector('.html-element'));

  

# Scroll

    const scroll = new Scroll();
    scroll.On((properties) => { // return {x,y,direction}
    scroll.ScrollEvents(properties, [customfunction1,customfunction2]);
    });

  

# Tracker

    const tracker = new Tracker();
    tracker.ElementViewTrack(document.querySelectorAll('.html-element'));    
    tracker.DataLayerPush({    
	    event:"event1",    
	    title:"title"    
    });

  

# Demo Page

  

[Github Repo Demo](https://github.com/umutyaldiz/FrontEnd-Architecture/tree/dev)

  
  

[FrontEnd-Architecture DEMO](https://umutyaldiz.com/hopejs-example/)