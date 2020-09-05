// Import
import Vue from 'vue';
import MyComponent from './components/MyComponent.vue';
import './styles/style.scss';

// Vytvoření vue instance
var vm = new Vue({
    // Rootovský element
    el: '#app',
    // Metody
    // Komponenty
    components: {
        'my-component': MyComponent
    }
});

// When everything is loaded, unhide #app container. This
// mechanism prevents FOUC on initial page load.
import './styles/unhide.scss';
