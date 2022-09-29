//перевод текста
let txt = document.getElementsByClassName("txt");
if (navigator.language == "ru-RU") {
  for (let i=0; i<txt.length; i++) {
    txt[i].innerText = words[1][i]
  }
} else {
  for (let i=0; i<txt.length; i++) {
    txt[i].innerText = words[0][i]
  }
};

//переключение темы
let themeBtn = document.getElementById("sw-theme");
  let thmChng1 = document.getElementsByClassName("project-tile");
themeBtn.onclick = function() {
  let thmChng = document.getElementsByClassName("thm");
  let par = document.getElementsByTagName('p');
  let h1 = document.getElementsByTagName('H1');
  let h3 = document.getElementsByTagName('H3');
  if (document.body.style.backgroundColor == '' || document.body.style.backgroundColor == 'rgb(221, 221, 221)' ) {
    document.body.style.backgroundColor = '#222';
  //  document.body.style.color = '#ddd';
    for (let i=0; i<thmChng.length; i++) {
      thmChng[i].style.color = '#ddd'
    };
    for (let i=0; i<thmChng1.length; i++) {
      thmChng1[i].style.color = '#ddd'
    };
    for (let i=0; i<par.length; i++) {
      par[i].style.color = '#ddd';
    };
    for (let i=0; i<h1.length; i++) {
      h1[i].style.textShadow = '1px 1px 3px #aaa';
      h1[i].style.color = '#ddd';
    };
    for (let i=0; i<h3.length; i++) {
      h3[i].style.color = '#ddd';
    };
  } else {
    document.body.style.backgroundColor = '#ddd';
    document.body.style.color = '#111';
    for (let i=0; i<thmChng.length; i++) {
      thmChng[i].style.color = '#111'
    };
    for (let i=0; i<thmChng1.length; i++) {
      thmChng1[i].style.color = '#111'
    };
    for (let i=0; i<par.length; i++) {
      par[i].style.color = '#111';
    };
    for (let i=0; i<h1.length; i++) {
      h1[i].style.textShadow = '1px 1px 3px #333';
      h1[i].style.color = '#111';
    };
    for (let i=0; i<h3.length; i++) {
      h3[i].style.color = '#111';
    };
  };
  //alert('1212');
};


