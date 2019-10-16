document.addEventListener("DOMContentLoaded", function() {
  //-------------------------works with if and else-----------------------------
  // const cities = document.getElementById("cities");
  // cities.addEventListener("click", function() {
  //   var text1 = cities.options[cities.selectedIndex].text;
  //   if (text1 == "--Select a city--") {
  //     setDefaultBackgroundImage();
  //   } else if (text1 == "NYC") {
  //     setNycBackgroundImage();
  //   } else if (text1 == "SF") {
  //     setSfBackgroundImage();
  //   } else if (text1 == "LA") {
  //     setLaBackgroundImage();
  //   } else if (text1 == "ATX") {
  //     setAustinBackgroundImage();
  //   } else if (text1 == "SYD") {
  //     setsydneyBackgroundImage();
  //   }
  // });
  //-----------------------Object method----------------------------------------
  const cities = document.getElementById("cities");
  cities.addEventListener("click", function() {
    var text1 = cities.options[cities.selectedIndex].text;
    if (text1 == object.textValue[0]) {
      object.image[0]();
    } else if (text1 == object.textValue[1]) {
      object.image[1]();
    } else if (text1 == object.textValue[2]) {
      object.image[2]();
    } else if (text1 == object.textValue[3]) {
      object.image[3]();
    } else if (text1 == object.textValue[4]) {
      object.image[4]();
    } else if (text1 == object.textValue[5]) {
      object.image[5]();
    }
  });

  var object = {
    textValue: ["--Select a city--", "NYC", "SF", "LA", "ATX", "SYD"],
    image: [
      setDefaultBackgroundImage,
      setNycBackgroundImage,
      setSfBackgroundImage,
      setLaBackgroundImage,
      setAustinBackgroundImage,
      setsydneyBackgroundImage
    ]
  };
});
