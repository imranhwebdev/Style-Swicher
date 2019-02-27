(function ($){
	"use strict";
var $options = {
        1: {
            title: "General Settings",
            icon: 'fa fa-cogs',
            panel: true,
            fields: {
                1: {
                    fieldTitle: 'Page Background Color',
                    field: 'color',
                    id: 'bg',
                    target: 'body',
                    action: 'backgroundChange',
                },
                2: {
                    fieldTitle: 'Page Background Pattern',
                    field: 'selectBox',
                    target: 'body',
                    actionArgs: 'pat-1 pat-2 no-pat',
                    action: 'switchClass',
                    name: 'bgpt',
                    desc: 'You will need to remove the <b>Background Color</b> to apply background pattern',
                    options: {
                        1: {                            
                            value: 'pat-1',
                            img: 'assets/img/pat1.jpg',
                            width: 46,
                            height: 46,
                        },
                        2: {
                            value: 'pat-2',
                            img: 'assets/img/pat2.jpg',
                            width: 46,
                            height: 46,
                        },
                        3: {
                            value: 'no-pat',
                            img: 'assets/img/close.jpg',
                            width: 46,
                            height: 46,
                            default: true
                        }
                    }
                },
                3: {
                    groupTitle: 'Text Customizations',
                    group: {
                        1: {
                            fieldTitle: 'Text Color',
                            field: 'color',
                            id: 'color',
                            target: 'body p',
                            action: 'colorChange',
                        },
                        2: {
                            fieldTitle: 'Text Size',
                            field: 'number',
                            id: 'size',
                            target: 'body p',
                            action: 'textSize',
                            default: 14,
                            actionArgs: {
                                unit: 'px'
                            }
                        },
                    },
                },
            }
        },
        2: {
            title: "Skins",
            icon: 'fa fa-paint-brush',
            panel: true,
            active: true,
            fields: {
                1: {
                    fieldTitle: 'Home Slider Skin',
                    field: 'selectBox',
                    name: 'slider',
                    target: '.carousel',
                    action: 'switchClass',
                    actionArgs: 'light dark',
                    options: {
                        1: {                            
                            value: 'dark',
                            text: 'Dark',
                            width: 52,
                            height: 25,
                            default: true
                        },
                        2: {
                            value: 'light',
                            text: 'Light',
                            width: 52,
                            height: 25
                        }
                    }
                },
                2: {
                    fieldTitle: 'Header Skin',
                    field: 'selectBox',
                    name: 'header',
                    target: '.navbar',
                    action: 'switchClass',
                    actionArgs: 'light dark',
                    options: {
                        1: {                            
                            value: 'dark',
                            text: 'Dark',
                            width: 52,
                            height: 25,
                            default: true
                        },
                        2: {
                            value: 'light',
                            text: 'Light',
                            width: 52,
                            height: 25
                        }
                    }
                }
            }
        }
    }

    styleswitch.style({
        height: 420
    });
    styleswitch.addOptions($options);

})(jQuery);
