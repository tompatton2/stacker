function tabsActivity() {
  const form_one = document.querySelector(".form_one")
  const form_two = document.querySelector(".form_two")
  const form_three = document.querySelector(".form_three")
  const dropdown__selection = document.getElementById("dropdown__selection");

  function hide_html(ele) {
    ele.style.display = "none";
  }

  function show_html(ele) {
    ele.style.display = null;
  }

  dropdown__selection.addEventListener('change', function() {
    var index = dropdown__selection.selectedIndex;
    if (index == "1") {
      hide_html(form_two)
      hide_html(form_three)
      show_html(form_one)
    } else if (index == "2") {
      hide_html(form_one)
      hide_html(form_three)
      show_html(form_two)
    } else if (index == "3") {
      hide_html(form_one)
      hide_html(form_two)
      show_html(form_three)
    } else {
      hide_html(form_two)
      hide_html(form_three)
      show_html(form_one)
    }
  })
}

export { tabsActivity };
