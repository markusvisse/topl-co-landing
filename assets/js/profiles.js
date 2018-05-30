function profileOnClick(img, name) {

  var x = document.querySelector('#' + name + '.profileBio');
  var newimg = document.getElementById(img);

  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }

  if (newimg.style.borderBottom !== null && newimg.style.borderBottom !== 'none' && newimg.style.borderBottom !== '') {
    newimg.style.borderBottom = 'none';
  } else {
    newimg.style.borderBottom = '8px solid #00A18E';
    newimg.style.paddingBottom = '5px';
  }

  var openProfiles = document.getElementsByClassName('profileBio');

  for (var i = 0; i < openProfiles.length; i++) {
    if ((openProfiles[i].style.display === 'flex' || openProfiles[i].style.display === null) && openProfiles[i].id !== name) {
      openProfiles[i].style.display = 'none';
    }
  }

  var openBorders = ['chris-img', 'jim-img', 'nick-img', 'kim-img', 'yamir-img', 'albert-img', 'alex-img', 'matt-img', 'paige-img', 'oskar-img', 'anna-img', 'thomas-img', 'mitchell-img', 'gary-img'];
  openBorders.splice(openBorders.indexOf(img), 1);

  for (var i = 0; i < openBorders.length; i++) {
    var border = document.getElementById(openBorders[i]);
    if (border.style.borderBottom !== null) {
      if (border.style.borderBottom !== 'none') {
        border.style.borderBottom = 'none';
      }
    }
  }
}