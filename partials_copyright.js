jsCopyright('Michael James Turiano Albatana');
function jsCopyright(author){
  var date = new Date(),
      text = 'Copyright + &copy;' + date.getFullYear() + '&nbsp;' + author,
      footer = document.createElement('footer');
  footer.id = 'footer-copyright';
  footer.innerHTML = text;
  document.getElementsByTagName('body')[0].insertBefore(footer,null);
}