Tinytest.add('full name', function (test) {
  test.matches(randomFullname(), /[A-Z][a-z]+ [A-Z][a-z]+/);
});
