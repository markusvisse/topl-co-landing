function profileOnClick(img, name) {
  
  var x = document.querySelector('#' + name + '.profileBio');
  var newimg = document.getElementById(img);
  
  if(x.style.display === 'none') {
    x.style.display = 'flex';
    newimg.style.borderBottom = '8px solid #00A18E';
    newimg.style.paddingBottom = '5px';
  } else {
    x.style.display = 'none';
  }
  
  var openProfiles = document.getElementsByClassName('profileBio');
  
  for(var i = 0; i < openProfiles.length; i++) {
    if((openProfiles[i].style.display === 'flex' || openProfiles[i].style.display === null) && openProfiles[i].id !== name) {
      openProfiles[i].style.display = 'none';
    }
  }

  var openBorders = ['chris-img', 'jim-img', 'nick-img', 'kim-img', 'yamir-img', 'albert-img', 'alex-img', 'matt-img'];
  
  for(var i = 0; i < openBorders.length; i++) {
    var border = document.getElementById(openBorders[i]);
    console.log(border);
    if(border.style.borderBottom !== null) {
      if(border.style.borderBottom !== 'none') {
        border.style.borderBottom = 'none';
      }
    }
  }
}