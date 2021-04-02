console.clear();
var OnePageMenu__data = [];
var OnePageMenu__currentLinkNo = 0;
var OnePageMenu__initialNo = window.location.hash.replace('#page', '') * 1;
if ( isNaN(OnePageMenu__initialNo) ) { OnePageMenu__initialNo = 0; }
var scrollTop = $(window).scrollTop();
var windowHeight = $(window).height();

function OnePageMenu__changeLinkNo(linkNo) {
  if ( OnePageMenu__currentLinkNo !== linkNo ) {

    $('a.one-page-link[href="#page' + OnePageMenu__currentLinkNo + '"]').removeClass('active');
    OnePageMenu__currentLinkNo = linkNo;

    $('a.one-page-link[href="#page' + OnePageMenu__currentLinkNo + '"]').addClass('active');

    window.location.hash = 'page' + OnePageMenu__currentLinkNo;
  }
}

function OnePageMenu__init() {
  $('[data-one-page-link]').addClass('one-page-menu-target');

  $(window).scroll(_.debounce(OnePageMenu__checkAndActive, 50));

  $(window).resize(_.debounce(OnePageMenu__initOffset, 500));
  OnePageMenu__initOffset();

  $('a.one-page-link').click(function() {
    var $el = $(this);

    var href = $el.attr('href');

    var no = href.replace('#page', '');

    var top = $('[data-one-page-link="page' + no + '"]').offset().top;

    $('html,body').stop().animate({scrollTop:top}, 300);

    return false;
  });

  if ( OnePageMenu__initialNo > 0 ) {
    if ( OnePageMenu__initialNo <= OnePageMenu__data.length ) {
      $('a.one-page-link[href="#page' + OnePageMenu__initialNo + '"]').click();
    }
  }
}

function OnePageMenu__initOffset() {
  OnePageMenu__data = [];

  $('.one-page-menu-target').each(function(index, node) {
    var $node = $(node);

    var offsetTop = $node.offset().top;
    
    var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
    var translateX = matrix[12] || matrix[4];
    var translateY = matrix[13] || matrix[5];

    if ( translateY ) {
      offsetTop -= translateY;
    }

    $node.data('data-one-page-menu-target-offsetTop', offsetTop);
    $node.attr('data-one-page-menu-target-offsetTop', offsetTop);

    if ( !$node.attr('data-one-page-menu-target-diff-y') ) {
      $node.attr('data-one-page-menu-target-diff-y', '0');
    }

    var diffY = $node.attr('data-one-page-menu-target-diff-y');

    if ( diffY.substr(-2, 2) == 'vh' ) {
      diffY = parseInt(diffY);

      diffY = diffY * $(window).height() / 100;
    }
    else if ( diffY.substr(-1, 1) == '%' ) {
      diffY = parseInt(diffY);

      diffY = diffY * $node.height() / 100;
    }
    else {
      diffY = parseInt(diffY);
    }

    $node.data('data-one-page-menu-target-diff-y', diffY);

    var link = $node.attr('data-one-page-link');

    OnePageMenu__data.push({
      link: link,
      offsetTop: offsetTop,
      diffY: diffY,
      linkNo: index + 1
    });
  });

  OnePageMenu__checkAndActive();
}

function OnePageMenu__checkAndActive() {
  scrollTop = $(window).scrollTop();
  windowHeight = $(window).height();

  var linkNo = 0;

  for ( var i = OnePageMenu__data.length - 1; i >= 0; i-- ) {
    var row = OnePageMenu__data[i];

    if ( scrollTop + windowHeight + row.diffY > row.offsetTop ) {
      linkNo = row.linkNo;

      if ( i > 0 && scrollTop + OnePageMenu__data[i - 1].diffY <= OnePageMenu__data[i - 1].offsetTop ) {
        linkNo--;
      }

      break;
    }
  }

  OnePageMenu__changeLinkNo(linkNo);

  $('.one-page-menu-target').each(function(index, node) {
    var $node = $(node);

    var offsetTop = $node.data('data-one-page-menu-target-offsetTop') * 1;
    var diffY = parseInt($node.data('data-one-page-menu-target-diff-y'));

    var nodeHeight = $node.height();

    if ( scrollTop + windowHeight + diffY > offsetTop ) {
      if ( $node.hasClass('active') == false ) {
        $node.addClass('active');
      }
    }
    else {
      if ( $node.hasClass('active') ) {
        $node.removeClass('active');
      }
    }
  });
}

$(function() {
  OnePageMenu__init();
});

const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});