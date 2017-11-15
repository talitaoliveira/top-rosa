


  // Comportamento do icone de menu mobile
  const menu_icon = document.querySelector(".icon-menu");
  const menu_list = document.querySelector(".menu-list");
  const menu_items = document.querySelectorAll(".menu-item");

  const container = document.querySelector(".container");
  
  menu_icon.addEventListener("click", evt => {
    event.preventDefault();
    menu_list.classList.toggle("show");
    menu_icon.classList.toggle( "active" );

    // clicando fora do menu e fechando o menu caso ele esteja aberto
    container.addEventListener("click", function(e){
      event.preventDefault();
      if( menu_list.classList.contains("show") ){
        menu_list.classList.remove( "show" );
        menu_icon.classList.toggle( "active" );
      }
  
    })

  });

  menu_items.forEach(function(e) {
    e.addEventListener("click", evt2 => {
      event.preventDefault();
      var ativos = document.querySelectorAll(".destaque-item-menu");

      if(ativos.length > 0 ){
        ativos.forEach(function(e2){
          e2.classList.remove("destaque-item-menu");
        })
      }
      e.classList.toggle("destaque-item-menu");
      menu_list.classList.remove("show");
      menu_icon.classList.toggle( "active" );
    })
  });
