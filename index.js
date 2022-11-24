

  $(document).ready(function(){

    $(function(){
        $('#me').on('click', function(){
          // Perform some login actions...
          // ...
          // Then update the login status image
          $('#thumbnail').attr('src', 'me.jpg');
          $('.log').css('display','none');
          $('.body').css('display','block');
          $('.navbar').css('visibility','visible')
        });
      });
      $(function(){
        $('#ronaldo').on('click', function(){
          // Perform some login actions...
          // ...
          // Then update the login status image
          $('#thumbnail').attr('src', 'ronaldo.jfif');
          $('.log').css('display','none');
          $('.body').css('display','block');
          $('.navbar').css('visibility','visible')
        });
      });
      $(function(){
        $('#prisca').on('click', function(){
          // Perform some login actions...
          // ...
          // Then update the login status image
          $('#thumbnail').attr('src', 'prisca.jpg');
          $('.log').css('display','none');
          $('.body').css('display','block');
          $('.navbar').css('visibility','visible')
        });
      });
  });