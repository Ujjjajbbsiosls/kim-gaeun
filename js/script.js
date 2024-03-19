$(document).ready(function(){

    
    // 클릭시 상세페이지 나옴

    $(".con1_img").click(function(){
      $(".con_bg , .c1").show();

    });


    $(".con_bg").click(function(){
      $(".con_bg , .c1").hide();

    });
    // con1


    // con2
    $(".con2_left_img").click(function(){
      $(".con_bg , .c4").show();
    })

    $(".con_bg").click(function(){
      $(".con_bg , .c4").hide();

    });


    $(".con2_right_img").click(function(){
      $(".con_bg , .c5").show();
    })

    $(".con_bg").click(function(){
      $(".con_bg , .c5").hide();

    });


    // con3

    // con3 포스터,패키지 팝업 값 
    $(".con3_left_img").click(function(){
      $(".con_bg, .c2").show();

    });


    $(".con_bg").click(function(){
      $(".con_bg, .c2").hide();

    });


    $(".con3_right_img").click(function(){
      $(".con_bg, .c3").show();

    });


    $(".con_bg").click(function(){
      $(".con_bg, .c3").hide();

    });





    $(".menu_plus").click(function(){
      $(".menu_plus_bg , .p_contents").show();

    });


    $(".menu_plus_bg").click(function(){
      $(".menu_plus_bg , .p_contents").hide();

    });



    $(".my_plus ul li").click(function(){
      $(".my_plus ul li").removeClass("on");
      $(this).addClass("on");



    });


// 검색창 띄우기 script
/* 검색 버튼을 클릭했을 때, 모바일 메뉴는 나타나고, 메뉴랩은 왼쪽으로 사라지고, 서치랩은 왼쪽에서 오른쪽으로 나타난다. */
let Search = document.querySelector(".s_click");
let MobileMenu = document.querySelector(".mobile_menu");
let MenuWrap = document.querySelector(".menu_wrap");
let SearchWrap = document.querySelector(".search_wrap");
let MobileSearch = document.querySelector(".m_click");

function SearchClick(){
  MobileMenu.style.display="block";
  MenuWrap.style.left="-300px";
  MenuWrap.style.transition="all 0.5s";
  SearchWrap.style.left="106px";
  SearchWrap.style.transition="all 0.5s";

}

Search.addEventListener("click",SearchClick);

function MobileSearchClick(){
  SearchWrap.style.left="-500px";
  SearchWrap.style.transition="all 0.5s";
  MenuWrap.style.left="0";
  MenuWrap.style.transition="all 0.5s";
  
}

  MobileSearch.addEventListener("click",MobileSearchClick);


});
// 좋아요 저장 스크립트
  let like = document.querySelector(".like");
  let hate = document.querySelector(".hate");
  let scrap = document.querySelector(".scrap");
  let save= document.querySelector(".save");

  function likeClick(){
    like.style.display="none";
    hate.style.display="inline";
  }
  like.addEventListener('click',likeClick);


  function hateClick(){
    hate.style.display="none";
    like.style.display="inline";
  }

  hate.addEventListener('click',hateClick);




  function scrapClick(){
    scrap.style.display="none";
    save.style.display="inline";
  }
  scrap.addEventListener('click',scrapClick);


  function saveClick(){
    save.style.display="none";
    scrap.style.display="inline";
  }

  save.addEventListener('click',saveClick);




  // let likel1 = document.querySelectorAll(".like l1");
  // let hateh1 = document.querySelectorAll(".hate h1");
  // let scrapc1 = document.querySelectorAll(".scrap c1");
  // let saves1= document.querySelectorAll(".save s1");

  // function likel1Click(){
  //   likel1.style.display="none";
  //   hateh1.style.display="inline";
  // }
  // likel1.addEventListener('click',likel1Click);


  // function hateh1Click(){
  //   hateh1.style.display="none";
  //   likel1.style.display="inline";
  // }

  // hateh1.addEventListener('click',hateh1Click);




  // function scrapc1Click(){
  //   scrapc1.style.display="none";
  //   saves1.style.display="inline";
  // }
  // scrapc1.addEventListener('click',scrapc1Click);


  // function saves1Click(){
  //   saves1.style.display="none";
  //   scrapc1.style.display="inline";
  // }

  // saves1.addEventListener('click',saves1Click);
