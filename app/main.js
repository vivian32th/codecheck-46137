function hello(name) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします。
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  //ここにHelloworldを実装します。
  if(name == "codecheck"){
    return "Hello codecheck!";
  }
  return "Hello World!";
}

module.exports = hello;
