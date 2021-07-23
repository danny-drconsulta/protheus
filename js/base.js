
function checkCarrinhoHeader(){
    var cart = readCookie("cart");
    
    if(typeof cart != "undefined" && cart != null && cart != ""){
        cart = JSON.parse(cart);

        if(cart.length > 0){
            $(".navbar-custom-menu li.carrinho").show();
            $(".navbar-custom-menu li.carrinho .quantidade").html(cart.length);
        } else {
            $(".navbar-custom-menu li.carrinho").hide();
        }
    } else {
        $(".navbar-custom-menu li.carrinho").hide();
    }
}

$(document).ready(function(){
    checkCarrinhoHeader();

    // MOBILE - Definir a largura do menu, Isso é para o scroll horizontal funcionar
    $(".main-sidebar .sidebar").css("width", $(".sidebar-menu").width());

    // DESKTOP/MOBILE - Essa funcionalidade é para abrir e fechar o submenu (Todos eles), ele coloca a class active nas divs e o resto fazemos pelo CSS
    $(".sidebar-menu .treeview a").on("click tap", function(){
        if(!$(this).parent().hasClass("active")){
            $(".sidebar-menu .active").find('.treeview-menu').hide();
            $(".sidebar-menu .active").removeClass("active");
        }

        $(this).parent().toggleClass('active');
        $(this).parent().find('.treeview-menu').slideToggle();
    });

    // DESKTOP - Quando clicar nos 3 tracinhos do menu no desktop ele irá deslizar, somente colocamos a class active e o resto quem faz é o CSS
    $(".sidebar-toggle").on('click tap', function(){
        $(".main-header").toggleClass("active");
        $(".main-sidebar").toggleClass("active");
        $(".content-page").toggleClass("active");

        // Aqui estamos remontando o gráfico para ele entender que a largura dele é diferente e se adaptar ao novo tamanho de tela
        setTimeout(() => {
            window.charts.start();
        }, 500);
    });
    
    // DESKTOP - Pesquisa pelos sub menus
    $(".main-sidebar .sidebar-form .close").on("click tap", function(){
        $(this).parents(".sidebar-form").find(".form-control").val("");
        $(this).parents(".sidebar-form").find(".form-control").removeClass("error");
    });

    $(".main-sidebar .form-control").on("keyup", function(){
        let that = this;

        // Transformando o texto em slug, para conseguir comparar ignorando acentos, assim iremos achar escrevendo com ou sem acentos
        var search = string_to_slug($(this).val());

        // Minimo de caracteres para pesquisar
        if(search.length > 3){

            // Aparecer botão de limpar
            $(".main-sidebar .sidebar-form .close").show();

            // Pesquisar em todos os submenus o texto
            $(".treeview-menu li").each(function(){

                // Transformando o texto em slug, para conseguir comparar ignorando acentos, assim iremos achar escrevendo com ou sem acentos
                var textItem = string_to_slug($(this).find("span").text());

                // Verificar se tem o texto no item
                if(textItem.includes(search)){
                    $(this).addClass("highlight");
                    
                    // Abrir o submenu se ele achar a string dentro dele
                    if(!$(this).parents(".treeview").hasClass("active")){
                        $(this).parents(".treeview").addClass("active");
                        $(this).parents(".treeview-menu").slideToggle();
                    }
                } else {
                    $(this).removeClass("highlight");
                }

                // Fechar os menus que não tem nenhum highlight ativo, fix para quando tiver multiplas pesquisas
                $(".treeview.active").each(function(){
                    if($(this).find(".highlight").length == 0){
                        $(this).removeClass('active');
                        $(this).find(".treeview-menu").slideToggle();
                    }
                });

                // Se não achar nenhum aberto, deixar o campo vermelho
                console.log($(".treeview.active"));
                console.log($(".treeview.active").length);
                if($(".treeview.active").length == 0){
                    $(that).addClass("error");
                } else {
                    $(that).removeClass("error");
                }
            });
        } else {

            // Sumir o botão de limpar
            $(".main-sidebar .sidebar-form .close").show();
        }
    });

});