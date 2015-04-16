if (!window.BTBookmarklets)
{
	window.BTBookmarklets = {};
}
BTBookmarklets.goToCounterpart = function() {
  if (/^github.com$/.test(window.location.hostname)) {
    if (/\.m(\?.*)?$/.test(window.location.href)) {
      window.location = window.location.href.replace(/\.m$/,'.h');
    } else if (/\.h(\?.*)?$/.test(window.location.href)) {
      window.location = window.location.href.replace(/\.h$/,'.m');
    }
  }
};

BTBookmarklets.goToCounterpart();
