
    function dropDownFunction() {
        document.getElementById("myflowerdropdown").classList.toggle("show");
        
    }
    function neardropDownFunction(){
        document.getElementById("neardropdown").classList.toggle("show");
    }
    function near_bydropDownFunction(){
        document.getElementById("near_bydropdown").classList.toggle("show");
    }
    function etcdropDownFunction(){
        document.getElementById("etcdropdown").classList.toggle("show");
    }

    // Close dropdown 
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdowncontent");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }