function marcaDesmarca(caller) {
    var checks = document.querySelectorAll('input[type="checkbox"]');    
    for(let i = 0; i < checks.length; i++) {
      checks[i].checked = checks[i] == caller;   
    }
  }