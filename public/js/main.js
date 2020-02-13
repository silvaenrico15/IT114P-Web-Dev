document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
  $(document).ready(function () {
 
    var list1 = document.getElementById('college');
     
    list1.options[0] = new Option('', '');
    list1.options[1] = new Option('CAS', 'CAS');
    list1.options[2] = new Option('CCIS', 'CCIS');
    list1.options[1] = new Option('CMET', 'CMET');
    list1.options[2] = new Option('ETYCB', 'ETYCB');
    list1.options[1] = new Option('MITL', 'MITL');
    list1.options[2] = new Option('SHS', 'SHS');
    });

    function getProgram(){
 
      var list1 = document.getElementById('college');
      var list2 = document.getElementById("program");
      var list1SelectedValue = list1.options[list1.selectedIndex].value;
       
      if (list1SelectedValue=='CAS')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('BAB', 'BAB');
          list2.options[2] = new Option('MMA', 'MMA');    
      }
      else if (list1SelectedValue=='CCIS')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('CS', 'CS');
          list2.options[2] = new Option('IT', 'IT');
           
      }
      else if (list1SelectedValue=='CMET')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('ME', 'ME');
          list2.options[2] = new Option('MT', 'MT');
           
      }
      else if (list1SelectedValue=='ETYCB')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('ENT', 'ENT');
          list2.options[2] = new Option('HRM', 'HRM');
           
      }
      else if (list1SelectedValue=='MITL')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('CPE', 'CPE');
          list2.options[2] = new Option('ECE', 'ECE');
           
      }
      else if (list1SelectedValue=='SHS')
      {
           
          list2.options.length=0;
          list2.options[0] = new Option('', '');
          list2.options[1] = new Option('AT', 'AT');
          list2.options[2] = new Option('TVLT', 'TVLT');
           
      }
}