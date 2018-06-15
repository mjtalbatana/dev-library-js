function loadCopyright(author='Michael James Turiano Albatana'){
  var date = new Date(),
      text = 'Copyright' + '&nbsp;' + '&copy;' + date.getFullYear() + '&nbsp;' + author,
      footer = document.createElement('footer');
  footer.innerHTML = text;
  document.getElementsByTagName('body')[0].insertBefore(footer,null);
}