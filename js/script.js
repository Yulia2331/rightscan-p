document.addEventListener("DOMContentLoaded", function() {
    try{
        $('.goods-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
          $('.br-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
            ]
          });
          $('.proj-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
            ]
          });
          $('.banner-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
          });
          $('.slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
          $('.product-card__slider-big').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.product-card__slider-nav'
          });
          $('.product-card__slider-nav').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.product-card__slider-big',
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
            ]
          });
          $('.product-card__vidio-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          });
          $('.completed-projects__slider').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: true,
            responsive: [
              {
                breakpoint: 1430,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 820,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 620,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 440,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]
          });
          $('.reviews-slider').slick({
            infinite: true,
            slidesToShow: 9,
            slidesToScroll: 3,
            arrows: true,
            responsive: [
              {
                breakpoint: 1430,
                settings: {
                  slidesToShow: 8,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1150,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                }
              }, 
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            ]
          });
        } catch (e) {}
        try{
          function tabs (tabsItems, tabsItem, tabsItemContent, acteveClass) {
              const tabs = document.querySelectorAll(tabsItems),
              tab = document.querySelector(tabsItem),
              tabsContent = document.querySelectorAll(tabsItemContent);
          if(tabs){
              tabs.forEach((tab) => 
                  tab.addEventListener('click', function(e){
                      e.preventDefault();
                      const id = e.target.getAttribute('href').replace('#', '');

                      tabs.forEach((child) => child.classList.remove(acteveClass));
                      tabsContent.forEach((child) => child.classList.add('hide'));
                      
                      tab.classList.add(acteveClass);
                      document.getElementById(id).classList.remove('hide');
                  })
                  );
                  if(tab){
                      tab.click();
                  }

      }; }
            tabs('.tabs__btn', '.tabs__btn', '.tabs-content__item', 'tabs__btn-active')
      } catch (e) {}
      try{
        const q = document.querySelectorAll('.product-nav-top__quantity');
        q.forEach((i) => {
          if(i.textContent == '' || i.textContent == '0'){
            i.classList.add('hide');
          }
        })
      } catch (e) {}
      const menuTrig = document.querySelector('.mob-menu-trig'),
      line = menuTrig.querySelectorAll('.mob-menu-trig__line'),
      closeLine = menuTrig.querySelector('.mob-menu-trig__close'),
      mobMenu = document.querySelector('.mob-menu');

      menuTrig.addEventListener('click', () => {
        mobMenu.classList.toggle('hide');
        closeLine.classList.toggle('hide');
        line.forEach((i) => {
          i.classList.toggle('hide');
        })
      })

});