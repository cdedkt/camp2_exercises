function getMenu(request, result) {
  const page = "<html><body>"
  + "<a href='http://localhost:3000/weatherbycity/london' target='_blank'>London</a></br>"
  + "<a href='http://localhost:3000/weatherbycity/paris/' target='_blank'>Paris</a></br>"
  + "</body></html>";

  result.send(page);
}

module.exports = getMenu;
