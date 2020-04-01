$(document).ready(function() {
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['page1', 'page2', 'page3','page4'],
      navigation: {
        'position': 'right',
        'tooltips': ['PROFILE', 'SKILL', 'WORK']
      },
      scrollingSpeed: 1000,
      sectionSelector: '.contents'
    });
  });