I18n.defaultLocale = 'en';
I18n.locale = $('html').attr('lang');
I18n.fallbacks = true;

React.render(
  <Wheelmap.App />,
  document.getElementById('wheelmap')
);